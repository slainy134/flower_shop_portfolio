import { prisma } from "@/prisma/prisma-client";
import { CalcTotalItemPrice } from "./calc-cart-item-price";

export const updateCartTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token,
        },
        include: {
            cartItems: {
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    product: {
                        include: {
                            variations: true,
                        }
                    },
                    variations: true,
                }
            },
        }
    })

    if (!token) {
        return;
    }

    const totalAmount = userCart?.cartItems.reduce((acc, item) => {
        return acc + CalcTotalItemPrice(item)
    }, 0)

    return await prisma.cart.update({
        where: {
            id: userCart?.id
        },
        data: {
            totalAmount,
        },
        include: {
            cartItems: {
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    product: {
                        include: {
                            variations: true,
                        }
                    },
                    variations: true,
                }
            },
        },
    })
}