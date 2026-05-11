import { PaymentData } from "@/@types/yookassa";
import axios from "axios";

interface Props {
    amount: number;
    description: string;
    orderId: number;
}

export async function CreatePayment(detais: Props) {
    const { data } = await axios.post<PaymentData>('https://api.yookassa.ru/v3/payments', {
        amount: {
            value: detais.amount,
            currency: "RUB",
        },
        capture: true,
        description: detais.description,
        metadata: {
            order_id: detais.orderId,
        },
        confirmation: {
            type: "redirect",
            return_url: process.env.YOOKASSA_CALLBACK_URL,
        },
    },
        {
            auth: {
                username: process.env.YOOKASSA_STORE_ID as string,
                password: process.env.YOOKASSA_API_KEY as string,
            },
            headers: {
                'Idempotence-Key': crypto.randomUUID()
            }
        })

    return data
}