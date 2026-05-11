'use server'

import { TCheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { PayTemplate } from "@/components/shared/email-templates/pay-template";
import { CreatePayment } from "@/lib/create-payment";
import { SendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";

export async function createOrder(data: TCheckoutFormValues) {
    try {
        const cookie = cookies();
        const cartToken = (await cookie).get('cartToken')?.value

        if (!cartToken) {
            throw new Error('Cart token not found')
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                cartItems: {
                    include: {
                        product: true,
                        variations: true,
                    }
                }
            },
            where: {
                token: cartToken,
            }
        })

        if (!userCart) {
            throw new Error('Cart not found')
        }

        if (userCart?.totalAmount == 0) {
            throw new Error('Cart is empty')
        }

        //зашиты жестко userid(auth)

        const order = await prisma.order.create({
            data: {
                userId: 1,
                token: cartToken,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
                address: data.address,
                comment: data?.comment,
                totalAmount: userCart.totalAmount + 300,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.cartItems)
            }
        })

        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            }

        })

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            }
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
            where: {
                id: order.id,
            },
            data: {
                paymentID: paymentData.id,
            },
        })

        const paymentUrl = paymentData.confirmation.confirmation_url;

        await SendEmail(data.email, 'Provence | Оплатите заказ №' + order.id, PayTemplate({
            orderId: order.id,
            totalAmount: userCart.totalAmount + 300,
            paymentUrl,
        }))

        return paymentUrl;

    } catch (err) {
        console.log(err)
    }
}