import { cn } from '@/lib/utils';
import { Trash } from 'lucide-react';
import React from 'react';
interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    price: number;
    variations?: string;
    onClickRemove?: () => void;
    loading: boolean;
}

export const CartDrawerItem: React.FC<Props> = ({ className, imageUrl, name, variations = '', price, onClickRemove, loading }) => {
    return (
        <div className={cn("flex flex-row m-4 p-1", loading && "opacity-50 pointer-events-none", className)}
            style={{
                borderTop: "1px solid #fda4af",
                borderBottom: "1px solid #fda4af",
            }}
        >
            <div className='flex items-start mt-1 w-2/8 pr-4'>
                <img src={imageUrl} alt={name} className='rounded-lg w-full' />
            </div>

            <div className='flex flex-col w-6/8 pr-2'>
                <h1 className='text-[16px] font-bold'>{name}</h1>
                {variations?.length > 0 && (
                    <p className='text-[14px] font-normal opacity-40'>{variations}</p>
                )}
                <div className='flex justify-between pt-4'>
                    <Trash className='text-rose-500 cursor-pointer' onClick={onClickRemove} />
                    <p className='text-[16px] font-bold'>{price} ₽</p>
                </div>
            </div>
        </div>
    );
};