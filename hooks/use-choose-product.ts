'use client';

import { IProduct } from '@/@types/prisma';
import { useCartStore } from '@/store/cart';
import toast from 'react-hot-toast';
import { useSet } from 'react-use';

export function useChooseProduct(product: IProduct, onSucces?: VoidFunction) {
    const [selectedVariations, { toggle: addVariation }] = useSet(new Set<number>([]));

    const addCartItem = useCartStore(state => state.addCartItem);
    const loading = useCartStore(state => state.loading);

    const totalVariationPrice = product.variations
        .filter((variation) => selectedVariations.has(variation.id))
        .reduce((acc, variation) => acc + variation.price, 0);

    const totalPrice = product.price + totalVariationPrice;

    const onAddProduct = async () => {
        try {
            await addCartItem({
                variations: Array.from(selectedVariations),
                productId: product.id,
            });
            toast.success('Товар добавлен в корзину', { duration: 2000 });
            onSucces?.();
        } catch (error) {
            toast.error('Не удалось добавить товар в корзину', { duration: 2000 });
            console.error(error);
        }
    };

    return {
        selectedVariations,
        addVariation,
        totalPrice,
        onAddProduct,
        loading,
    };
}