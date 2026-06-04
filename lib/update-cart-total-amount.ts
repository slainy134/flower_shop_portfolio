import { prisma } from "@/prisma/prisma-client";
import { CalcTotalItemPrice } from "./calc-cart-item-price";

export const updateCartTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token,
        },
        select: {
            id: true,
            cartItems: {
                select: {
                    product: {
                        select: {
                            price: true,
                        },
                    },
                    variations: {
                        select: {
                            price: true,
                        },
                    },
                },
            },
        },
    });

    if (!token) {
        return;
    }

    const totalAmount = userCart?.cartItems.reduce((acc, item) => {
        return acc + CalcTotalItemPrice(item)
    }, 0)

    return prisma.cart.update({
        where: {
            id: userCart?.id,
        },
        data: {
            totalAmount,
        },
        select: {
            id: true,
            token: true,
            totalAmount: true,
            cartItems: {
                orderBy: {
                    createdAt: 'desc',
                },
                select: {
                    id: true,
                    product: {
                        select: {
                            id: true,
                            name: true,
                            imageUrl: true,
                            price: true,
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
}