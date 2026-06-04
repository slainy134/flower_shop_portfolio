import { prisma } from "@/prisma/prisma-client";
import { unstable_cache } from "next/cache";

export const getProducts = async (id: number) => {
    return unstable_cache(
        async () => {
            return prisma.product.findFirst({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    name: true,
                    imageUrl: true,
                    description: true,
                    price: true,

                    variations: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                            imageUrl: true,
                        },
                    },
                },
            });
        },
        [`product-${id}`],
        {
            tags: [`product-${id}`, 'products'],
            revalidate: 86400,
        }
    )();
};