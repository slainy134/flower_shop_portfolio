import { CalcCartItemDTO } from "@/services/dto/cart.dto";

export const CalcTotalItemPrice = (item: CalcCartItemDTO): number => {
    const variationsTotal = item.variations?.reduce((sum, variation) => {
        return sum + variation.price;
    }, 0) ?? 0;

    return item.product.price + variationsTotal;
};