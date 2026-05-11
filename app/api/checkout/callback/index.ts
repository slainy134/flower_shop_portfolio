import { PaymentCallbackData } from "@/@types/yookassa";
import { OrderFailedTemplate } from "@/components/shared/email-templates/order-failed-template";
import { OrderSuccessTemplate } from "@/components/shared/email-templates/order-success-template";
import { SendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { CartItemDTO } from "@/services/dto/cart.dto";
import { OrderStatus } from "@prisma/client";
import { error } from "console";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as PaymentCallbackData

        const order = await prisma.order.findFirst({
            where: {
                id: Number(body.object.metadata.order_id),
            },
        })

        if (!order) {
            console.log("Order not found")
            return (error('Order not found'))
        }

        const isSucceeded = body.object.status === 'succeeded'

        await prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                status: isSucceeded ? OrderStatus.COMPLETED : OrderStatus.CANCELLED,
            },
        })


        const items = JSON.parse(order?.items as string) as CartItemDTO[];

        if (isSucceeded) {
            await SendEmail(order.email, 'Provence | Спасибо за покупку', OrderSuccessTemplate({
                orderId: order.id,
                items,
            }))
        } else {
            await SendEmail(order.email, 'Provence | Оплата не прошла', OrderFailedTemplate({
                orderId: order.id,
            }))
        }

    } catch (err) {
        console.log(err)
    }
}