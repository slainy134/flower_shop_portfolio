import { CartDTO } from "@/services/dto/cart.dto";
import { CalcTotalItemPrice } from "./calc-cart-item-price";
export type ICartItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    variations?: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    }[] | null;
};

interface ReturnProps {
    items: ICartItem[];
    totalAmount: number;
}

export const getCartDetails = (data: CartDTO | null | undefined): ReturnProps => {

    if (!data) {
        return {
            items: [],
            totalAmount: 0,
        };
    }

    const cartItems = data.cartItems ?? [];

    const items = cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.product.name,
        imageUrl: item.product.imageUrl,
        price: CalcTotalItemPrice(item),
        variations: item.variations,
    }));

    return {
        items,
        totalAmount: data.totalAmount,
    }
}