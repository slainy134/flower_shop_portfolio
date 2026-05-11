import { cn } from '@/lib/utils';
import { Category } from '@prisma/client';
import React from 'react';
import { Categories } from './categories';
import { Container } from './container';

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 z-10', className)}>
            <Container className="flex justify-between items-center">
                <Categories items={categories} />
                {/* <SortPopup /> */}
            </Container>
        </div>
    );
};