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
                        <p>
                            {item.product.name} — {item.product.price} ₽
                        </p>

                        {item.product.variations && item.product.variations.length > 0 && (
                            <p>
                                Вариации:{" "}
                                {item.product.variations.map((variation, index) => (
                                    <span key={index}>
                                        {variation.name} ({variation.price} ₽)
                                        {index < item.product.variations.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </p>
                        )}

                        {item.quantity && <p>Количество: {item.quantity} шт.</p>}
                    </li>
                ))}
            </ul>

            <p>Спасибо, что выбрали FlowerShop!</p>
        </div>
    );
}