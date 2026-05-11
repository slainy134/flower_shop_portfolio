
interface Props {
    orderId: number;
}

export function OrderFailedTemplate({ orderId }: Props) {
    return (
        <div>
            <h1>Оплата не прошла...</h1>

            <p>К сожалению, оплата заказа №{orderId} не была завершена.</p>
            <p>Возможно, произошла ошибка на стороне банка, недостаточно средств
                или истекло время ожидания.
            </p>

        </div>
    );
}