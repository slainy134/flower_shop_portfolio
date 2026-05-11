import { useCartStore } from "@/store/cart";
import React from "react";

export const useCart = () => {
    const totalAmount = useCartStore(state => state.totalAmount)
    const items = useCartStore(state => state.items)
    const fetchCartItems = useCartStore(state => state.fetchCartItems)
    const removeCartItem = useCartStore(state => state.removeCartItem)
    const loading = useCartStore(state => state.loading)

    React.useEffect(() => {
        fetchCartItems()
    }, [])

    return { totalAmount, items, fetchCartItems, removeCartItem, loading }
}
