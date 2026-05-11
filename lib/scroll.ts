'use client';

import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import { MouseEvent } from 'react';

export const useScrollToCategory = () => {
    const setActiveId = useCategoryStore((state) => state.setActiveId);

    const scrollToCategory = (
        e: MouseEvent<HTMLAnchorElement>,
        category: Category,
    ) => {
        e.preventDefault();

        setTimeout(() => {
            setActiveId(category.id);
        }, 700)

        const element = document.getElementById(category.name);
        if (element) {
            const yOffset = -90;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return scrollToCategory;
};