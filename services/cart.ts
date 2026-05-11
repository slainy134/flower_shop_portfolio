import { axiosInstant } from "./axios";
import { CartDTO, CreateCartItemDTO } from "./dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstant.get<CartDTO>('/cart');

    return data;
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
    const { data } = await axiosInstant.delete<CartDTO>('/cart/' + id)

    return data;
}

export const addCartItem = async (values: CreateCartItemDTO): Promise<CartDTO> => {
    const { data } = await axiosInstant.post<CartDTO>('/cart/', values)

    return data;
}