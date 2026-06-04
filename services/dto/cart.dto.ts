import { Cart, CartItem, Product, Variation } from "@prisma/client";

export type CartItemDTO = CartItem & {
    product: Product & {
        variations: Variation[];
    };
    variations: Variation[] | null;
};

export interface CartDTO extends Cart {
    cartItems: CartItemDTO[];
}

export interface CreateCartItemDTO {
    productId: number;
    variations?: number[];
}

export type CalcCartItemDTO = {
    product: {
        price: number;
    };
    variations?: {
        price: number;
    }[] | null;
};