import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/lib/update-cart-total-amount";
import { prisma } from "@/prisma/prisma-client";
import { CreateCartItemDTO } from "@/services/dto/cart.dto";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: [] });
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    {
                        token,
                    }
                ]
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
        });

        return NextResponse.json(userCart);
    } catch (error) {
        console.log(error)
    }

}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as CreateCartItemDTO;

        await prisma.cartItem.create({
            data: {
                cartId: userCart.id,
                productId: data.productId,
                quantity: 1,
                variations: { connect: data.variations?.map((id) => ({ id })) }
            }
        })

        const updatedCart = await updateCartTotalAmount(token);
        const resp = NextResponse.json(updatedCart);

        resp.cookies.set('cartToken', token)

        return resp;
    } catch (error) {
        console.log(error)
    }
}