export type IProduct = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;

    variations: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    }[];
};