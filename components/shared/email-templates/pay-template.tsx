interface Props {
    orderId: number;
    totalAmount: number;
    paymentUrl: string;
}

export function PayTemplate({ orderId, totalAmount, paymentUrl }: Props) {
    return (
        <div>
            <h1>Заказ №{orderId}</h1>
            <p>Оплатите заказ на сумму: {totalAmount}₽</p>
            <p>Перейдите <a href={paymentUrl}>по ссылке</a> для оплаты заказа.</p>
        </div>
    );
}