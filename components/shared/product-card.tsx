import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
    description?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className, description }) => {
    return (
        <div className={cn("border-2 border-y-rose-500 rounded-lg overflow-hidden", className)}>
            <Link href={`/products/${id}`} className='px-1 flex flex-col h-full'>

                <div className="shrink-0 xl:pt-4 xl:pb-4 md:pt-2 md:pb-2 bg-secondary flex items-center justify-center rounded-lg">
                    <img className="w-11/12 h-11/12 rounded-lg" src={imageUrl} alt={name} />
                </div>

                <div className='flex flex-col flex-1 min-h-0'>
                    <h1 className='font-bold line-clamp-2 lg:line-clamp-1 2xl:text-[22px] xl:text-xl lg:text-[16px]'>
                        {name}
                    </h1>

                    <p className='text-[#B1B1B1] font-normal line-clamp-2 flex-1 2xl:text-lg xl:text-[16px] lg:text-sm'>
                        {description}
                    </p>
                </div>

                <div className='flex flex-col items-center lg:gap-2 lg:flex-row lg:items-center lg:justify-between xl:pt-4 md:pt-2 mt-auto pb-2'>
                    <span className='2xl:text-xl xl:text-lg lg:text-[12px] font-normal whitespace-nowrap'>
                        от <b className='font-bold 2xl:text-xl xl:text-lg lg:text-[14px]'>{price} ₽</b>
                    </span>

                    <Button className='bg-white text-rose-500 hover:text-white hover:bg-rose-500 transition-colors duration-400 border border-rose-500 lg:border-none cursor-pointer'>
                        <Plus />
                        <p className='font-semibold 2xl:text-[14px] xl:text-xs lg:text-[10px]'>Добавить</p>
                    </Button>
                </div>
            </Link>
        </div>
    );
};