import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Package, Van } from 'lucide-react';
import React from 'react';
import { WhiteBlock } from '../white-block';

interface Props {
    className?: string;
    loading?: boolean;
    finalPrice: number;
    cartPrice: number;
    deliveryPrice: number;
}

export const CheckoutSideBar: React.FC<Props> = ({ className, finalPrice, cartPrice, deliveryPrice, loading }) => {
    return (
        <div className={className}>
            <WhiteBlock className='px-10'>

                <div>
                    <h1 className='font-normal text-[18px] 2xl:text[22px] xl:text-lg lg:text-sm'>Итого:</h1>
                    {loading ? (<Skeleton className='h-9 w-52 bg-rose-200' />) : (<p className='font-bold text-[22px] 2xl:text[28px] xl:text-[24px] lg:text-[22px]'>{finalPrice} ₽</p>)}
                </div>

                <div className='flex flex-col gap-3 mt-10'>

                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-2'>
                            <Package size={15} className='mt-1 opacity-40' />
                            <p>Стоимость товаров:</p>
                        </div>
                        {loading ? (<Skeleton className='h-6 w-16 bg-rose-200' />) : (<span className='font-bold'>{cartPrice} ₽</span>)}
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-2'>
                            <Van size={15} className="mt-1 opacity-40" />
                            <p>Доставка:</p>
                        </div>
                        {loading ? (<Skeleton className='h-6 w-16 bg-rose-200' />) : (<span className='font-bold'>{deliveryPrice} ₽</span>)}
                    </div>

                </div >

                <div className={cn('mt-10', { "pointer-events-none opacity-40": loading })}>
                    <Button className='w-full py-6 cursor-pointer'>
                        Перейти к оплате
                    </Button>
                </div>

            </WhiteBlock>
        </div>
    );
};