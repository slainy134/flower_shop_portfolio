'use server'

import { TCheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { CreateProductInput, createProductSchema } from "@/components/shared/create-product/create-product-schema";
import { PayTemplate } from "@/components/shared/email-templates/pay-template";
import { OrderCreatedTemplate } from "@/components/shared/telegram-templates/order-create-template";
import { CreatePayment } from "@/lib/create-payment";
import { SendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { sendTelegramMessage } from "@/services/telegram/telegram.service";
import { OrderStatus } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import z from "zod";
import { authOptions } from "./api/auth/[...nextauth]/route";


export async function createOrder(data: TCheckoutFormValues) {
    try {
        const cookieStore = cookies();
        const cartToken = (await cookieStore).get('cartToken')?.value;

        if (!cartToken) {
            throw new Error('Cart token not found');
        }

        const session = await getServerSession(authOptions);
        const userId = Number(session?.user?.id);

        if (isNaN(userId) || userId <= 0) {
            throw new Error("Пользователь не авторизован");
        }

        let userCart = await prisma.cart.findFirst({
            where: { token: cartToken },
            select: {
                id: true,
                totalAmount: true,
                userId: true,
                cartItems: {
                    select: {
                        id: true,
                        quantity: true,
                        product: {
                            select: {
                                id: true,
                                name: true,
                                price: true,
                                imageUrl: true,
                            },
                        },
                        variations: {
                            select: {
                                id: true,
                                name: true,
                                price: true,
                            },
                        },
                    },
                },
            },
        });

        if (!userCart) {
            throw new Error(`Корзина не найдена по токену: ${cartToken}`);
        }

        if (!userCart.userId) {
            await prisma.cart.update({
                where: { id: userCart.id },
                data: { userId: userId }
            });
        }

        if (userCart.totalAmount === 0) {
            throw new Error('Корзина пуста');
        }

        const order = await prisma.order.create({
            data: {
                userId: userId,
                token: cartToken,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
                address: data.address,
                date: data.date.toString().split('T')[0],
                time: data.time,
                comment: data?.comment,
                totalAmount: userCart.totalAmount + 300,
                status: OrderStatus.PENDING,
                items: userCart.cartItems,
            }
        })

        await prisma.cart.update({
            where: { id: userCart.id },
            data: { totalAmount: 0 }
        })

        await prisma.cartItem.deleteMany({
            where: { cartId: userCart.id }
        })

        const paymentData = await CreatePayment({
            amount: order.totalAmount,
            orderId: order.id,
            description: 'Заказ №' + order.id,
        })

        if (!paymentData) {
            throw new Error("Payment data not found")
        }

        await prisma.order.update({
            where: { id: order.id },
            data: { paymentID: paymentData.id },
        })

        const paymentUrl = paymentData.confirmation.confirmation_url;

        await SendEmail(data.email, 'FlowerShop | Оплатите заказ №' + order.id, PayTemplate({
            orderId: order.id,
            totalAmount: userCart.totalAmount + 300,
            paymentUrl,
        }))

        const itemsText = userCart.cartItems
            .map(item => {
                const variations = item.variations.length
                    ? ` (${item.variations.map(v => v.name).join(', ')})`
                    : '';

                return `• ${item.product.name}${variations}`;
            })
            .join('\n');

        await sendTelegramMessage(OrderCreatedTemplate({
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            address: data.address,
            date: data.date.toString().split('T')[0],
            time: data.time,
            comment: data?.comment,
            totalAmount: order.totalAmount,
            items: itemsText,
        }))

        return paymentUrl;

    } catch (err: any) {
        console.error("CreateOrder Error:", err.message);
        throw err;
    }
}

export async function deleteProduct(id: number) {
    try {
        await prisma.cartItem.deleteMany({
            where: {
                productId: id,
            },
        });

        await prisma.product.deleteMany({
            where: {
                id,
            },
        });

        revalidateTag(`product-${id}`, 'max');
        revalidateTag("products", 'max');
        revalidatePath('/');
    } catch (error) {
        console.error("[DELETE_PRODUCT]", error);
    }
}

//добавление продукта - временная версия(просто чтобы было пока что)
export async function createProduct(data: CreateProductInput) {
    try {
        const validated = createProductSchema.parse(data);

        const product = await prisma.product.create({
            data: {
                name: validated.name,
                imageUrl: validated.imageUrl,
                price: validated.price,
                description: validated.description || '',
                categoryId: validated.categoryId,
            },
            include: {
                category: true,
            },
        });

        revalidatePath('/admin/products');
        revalidatePath('/');

        return {
            success: true,
            product,
        };
    } catch (error) {
        console.error('Create product error:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors,
            };
        }

        return {
            success: false,
            error: 'Ошибка при создании товара',
        };
    }
}