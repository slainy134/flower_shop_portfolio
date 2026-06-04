import { prisma } from '@/prisma/prisma-client';
import { unstable_cache } from 'next/cache';

export const getCategories = unstable_cache(async () => {
    return prisma.category.findMany({
        where: {
            products: {
                some: {},
            },
        },
        select: {
            id: true,
            name: true,
        },
    });
},
    ['categories'],
    {
        tags: ['categories'],
        revalidate: 86400,
    }
)