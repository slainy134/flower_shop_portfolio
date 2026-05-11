import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex items-center gap-1', className)}>
            <ArrowUpDown />
            <p>Сортировка:</p>
            <b className='text-primary'>популярное</b>
        </div>
    );
};