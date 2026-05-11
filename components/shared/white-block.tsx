import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
    contentClassName?: string;
    title?: string;
    adornment?: React.ReactNode;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({ className, contentClassName, title, adornment, children }) => {
    return (
        <div className={cn("bg-white rounded-3xl p-4 border border-rose-500", className)}>
            {title && (
                <div className='flex justify-between'>
                    <h1 className='font-bold text-[18px] 2xl:text[22px] xl:text-lg lg:text-sm'>{title}</h1>
                    <div> {adornment} </div>
                </div>
            )}

            <div className={cn(contentClassName, "py-4")}>{children}</div>
        </div>
    );
};