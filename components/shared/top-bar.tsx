import { cn } from '@/lib/utils';
import { CategoryNavDTO } from '@/services/dto/category.dto';
import React from 'react';
import { Categories } from './categories';
import { Container } from './container';

interface Props {
    categories: CategoryNavDTO[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 z-10', className)}>
            <Container className="flex justify-between items-center">
                <Categories items={categories} />
            </Container>
        </div>
    );
};