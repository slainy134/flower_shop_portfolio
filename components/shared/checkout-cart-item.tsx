'use client'

import { cn } from '@/lib/utils';
import { useCartStore } from '@/store/cart';
import { X } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    variations?: string;
    price: number;
    onClickRemove?: () => void;
}

export const CheckoutCartItem: React.FC<Props> = ({
    className,
    imageUrl,
    name,
    variations = '',
    price,
    onClickRemove,
}) => {
    const loading = useCartStore(state => state.loading)
    return (
        <div className={cn("flex items-start gap-4 border-t-2 py-2 border-[#F6F6F6]", loading && "opacity-50 pointer-events-none", className)}>
            <div className="shrink-0 size-2/8 lg:size-2/12">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-[15px] sm:text-base font-bold leading-tight pr-2 line-clamp-2">
                    {name}
                </h3>

                {variations.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                        {variations}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-between h-full min-w-22.5">
                <p className="text-[16px] font-bold whitespace-nowrap text-center">
                    {price} ₽
                </p>

                <button
                    onClick={onClickRemove}
                    className="text-rose-500 cursor-pointer"
                >
                    <X size={22} />
                </button>
            </div>
        </div>
    );
};