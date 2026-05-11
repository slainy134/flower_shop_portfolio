import { axiosInstant } from "./axios"
import { Product } from "@prisma/client"

export const search = async (query: string) => {
    const { data } = await axiosInstant.get<Product[]>('/products/search', { params: { q: query } })

    return data;
}