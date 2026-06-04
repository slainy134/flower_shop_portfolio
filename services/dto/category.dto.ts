export interface CategoryNavDTO {
    id: number;
    name: string;
}

export interface ProductDTO {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
}

export interface OrderItemDTO {
    id: number;
    quantity: number;
    product: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    };
    variations: {
        id: number;
        name: string;
        price: number;
    }[];
}

export interface CategoryDTO extends CategoryNavDTO {
    products: ProductDTO[];
}