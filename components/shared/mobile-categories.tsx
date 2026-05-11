'use client';

import { useScrollToCategory } from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import { Menu, X } from 'lucide-react';
import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
interface Props {
    items: Category[];
    className?: string;
}

export const MobileCategories: React.FC<Props> = ({ className, items }) => {
    const activeId = useCategoryStore((state) => state.activeId);
    const scrollToCategory = useScrollToCategory();
    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger>
                    {/* <Button
                        className='flex items-center justify-center h-10 w-10 mr-2'
                        suppressHydrationWarning
                    > */}
                    <Menu className='flex items-center justify-center h-8 w-8 mr-2 text-rose-500' />
                </SheetTrigger>
                <SheetContent showCloseButton={false}>
                    <SheetHeader>
                        <SheetTitle>
                            <p className='font-extrabold text-xl'>Все категории</p>
                        </SheetTitle>
                    </SheetHeader>
                    <div className='absolute right-4 top-4 text-rose-500 hover:text-rose-700'>
                        <SheetClose>
                            <X className="cursor-pointer" />
                        </SheetClose>
                    </div>
                    <div className='flex flex-col px-4 text-lg font-bold'>
                        {items.map((category) => (
                            <a
                                key={category.id}
                                href={`/#${category.name}`}
                                onClick={(e) => scrollToCategory(e, category)}
                                className={cn(
                                    'py-2 rounded-lg pl-2',
                                    activeId === category.id
                                        ? 'bg-white shadow-md shadow-gray-200 text-primar border border-rose-500'
                                        : 'text-gray-700 hover:bg-gray-100'
                                )}
                            >
                                {category.name}
                            </a>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};