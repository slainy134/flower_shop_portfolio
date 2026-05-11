import { CartItemDTO } from "@/services/dto/cart.dto";

interface Props {
    orderId: number;
    items: CartItemDTO[];
}

export function OrderSuccessTemplate({ orderId, items }: Props) {
    return (
        <div>
            <h1>Спасибо за покупку!</h1>

            <p>Ваш заказ №{orderId} успешно оплачен.</p>
            <p>Список товаров:</p>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <p>{item.product.name} - {item.product.price}</p>
                        <p>{item.product.variations.map((variation) => (
                            <span>{variation.name} - {variation.price}</span>
                        ))}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}