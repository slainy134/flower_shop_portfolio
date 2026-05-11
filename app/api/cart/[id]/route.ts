import { updateCartTotalAmount } from "@/lib/update-cart-total-amount";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }>; }) {
    try {
        const id = params;
        const body = (await req.json()) as { quantity: number };
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            console.log('нет токена')
            return NextResponse.json({ error: 'No token' }, { status: 401 });
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id: Number((await params).id)
            }
        })

        if (!cartItem) {
            console.log('товар не найден')
        }

        await prisma.cartItem.update({
            where: {
                id: Number((await params).id),
            },
            data: {
                quantity: body.quantity,
            }
        })

        const updatedUserCart = await updateCartTotalAmount(token);

        return NextResponse.json(updatedUserCart);

    } catch (error) {
        console.log(error)
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }>; }) {
    try {
        const id = params;
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            console.log('нет токена')
            return NextResponse.json({ error: 'No token' }, { status: 401 });
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id: Number((await params).id)
            }
        })

        if (!cartItem) {
            console.log('товар не найден')
        }

        await prisma.cartItem.delete({
            where: {
                id: Number((await params).id),
            },
        })

        const updatedUserCart = await updateCartTotalAmount(token);

        return NextResponse.json(updatedUserCart);

    } catch (error) {
        console.log(error)
    }
}