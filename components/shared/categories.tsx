'use client';

import { useScrollToCategory } from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import React from 'react';

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
    const activeId = useCategoryStore((state) => state.activeId);
    const scrollToCategory = useScrollToCategory();

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {items.map((category) => (
                <a
                    key={category.id}
                    href={`/#${category.name}`}
                    onClick={(e) => scrollToCategory(e, category)}
                    className={cn(
                        'flex items-center font-bold xl:h-11 lg:h-10 rounded-2xl px-5 transition-colors 2xl:text-[16px] xl:text-[14px] lg:text-[12px]',
                        activeId === category.id
                            ? 'bg-white shadow-md shadow-gray-200 text-primar border border-rose-500'
                            : 'text-gray-700 hover:bg-gray-100'
                    )}
                >
                    {category.name}
                </a>
            ))}
        </div>
    );
};