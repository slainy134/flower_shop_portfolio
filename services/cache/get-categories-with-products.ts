import { prisma } from '@/prisma/prisma-client';
import { unstable_cache } from 'next/cache';

export const getCategoriesWithProducts = unstable_cache(async () => {
    return prisma.category.findMany({
        where: {
            products: {
                some: {},
            },
        },
        select: {
            id: true,
            name: true,
            products: {
                select: {
                    id: true,
                    name: true,
                    imageUrl: true,
                    description: true,
                    price: true,
                },
            },
        },
    });
},
    ['categories-with-products'],
    {
        tags: ['categories-with-products'],
        revalidate: 86400,
    }
);