'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ProductCard } from './product-card';

interface Props {
    className?: string;
    items: any[];
    title: string;
    categoryId: number;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ className, items, title, categoryId, listClassName }) => {
    const setActiveId = useCategoryStore((state) => state.setActiveId);

    const { ref, inView } = useInView({
        threshold: 0.3,
        rootMargin: '-100px 0px -45% 0px',
    });

    React.useEffect(() => {
        if (inView) {
            setActiveId(categoryId);
        }
    }, [inView, categoryId, setActiveId]);
    return (
        <div className={className} id={title} ref={ref}>
            <h1 className="font-bold pb-3 2xl:text-[32px] 2xl:text-3xl xl:text-[28px] lg:text-2xl">
                {title}
            </h1>

            <div className={cn('grid grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-12 xl:gap-10 lg:gap-8', className)}>
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};