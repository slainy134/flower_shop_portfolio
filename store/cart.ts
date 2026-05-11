import { getCartDetails, ICartItem } from "@/lib/get-cart-details";
import { Api } from "@/services/api-client";
import { CreateCartItemDTO } from "@/services/dto/cart.dto";
import toast from "react-hot-toast";
import { create } from "zustand";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: ICartItem[];
    fetchCartItems: () => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data));
        } catch (error) {
            console.error(error)
            set({ error: true, loading: false })
        } finally {
            set({ loading: false })
        }
    },
    removeCartItem: async (id: number) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
            toast.success('Товар удалён из корзины', { duration: 2000 })
        } catch (error) {
            console.error(error)
            toast.error('Не удалось удалить товар из корзины', { duration: 2000 })
            set({ error: true, loading: false })
        } finally {
            set({ loading: false })
        }
    },
    addCartItem: async (values: CreateCartItemDTO) => {
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        } catch (error) {
            console.error(error)
            set({ error: true, loading: false })
        } finally {
            set({ loading: false })
        }
    },
}));