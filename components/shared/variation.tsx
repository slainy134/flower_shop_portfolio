import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Variation: React.FC<Props> = ({ imageUrl, name, price, active, onClick, className }) => {
    return (
        <div
            className={cn(
                className,
                `border border-rose-300 flex flex-col 
                 max-w-40 lg:max-w-28 xl:max-w-32.5 
                 max-h-52 lg:max-h-40 xl:max-h-47.5 
                 my-2 bg-white rounded-lg items-center cursor-pointer 
                 ${active && "border-2 border-rose-500 duration-50"}`
            )}
            onClick={onClick}
        >
            <div className="mt-1">
                <img
                    src={imageUrl}
                    alt={name}
                    className="size-20 lg:size-24 xl:size-26 rounded-lg"
                />
            </div>
            <div className="max-w-28 lg:max-w-24 xl:max-w-26 text-center">
                <p className="font-normal text-xs line-clamp-2">{name}</p>
            </div>
            <div className="max-w-28 lg:max-w-24 xl:max-w-26 text-center flex items-center justify-center">
                <span className="font-semibold text-[13px] lg:text-[14px]">{price} ₽</span>
                {active && <CircleCheck className="ml-2 size-3 lg:size-4 text-rose-500" />}
            </div>
        </div>
    );
};