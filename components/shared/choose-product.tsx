'use client'

import { IProduct } from '@/@types/prisma';
import { useChooseProduct } from '@/hooks/use-choose-product';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { MobileProductForm } from './mobile-product-form';
import { Variation } from './variation';
interface Props {
    product: IProduct
    className?: string;
}

export const ChooseProduct: React.FC<Props> = ({ className, product }) => {

    const { selectedVariations, addVariation, totalPrice, onAddProduct, loading } = useChooseProduct(product);

    const isMobile = useIsMobile(1023);

    return (
        <>{isMobile ? (
            <MobileProductForm
                product={product}
                selectedVariations={selectedVariations}
                totalPrice={totalPrice}
                addVariation={addVariation}
                onAddProduct={onAddProduct}
                loading={loading}
            />
        ) : (
            <div className="flex gap-12 justify-center h-full">
                <div className='w-[40vw] xl:w-[45vw]'>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className='border border-rose-500 rounded-lg'
                    />
                </div>

                <div className='flex flex-col w-[50vw]'>
                    <div className='w-full'>
                        <h1 className='text-[24px] 2xl:text-[34px] font-extrabold'>{product.name}</h1>
                        <p className='text-[10px] 2xl:text-[14px] text-[#777777] font-normal'>{product.description}</p>
                    </div>

                    <div className='mt-4'>
                        {product.variations.length > 0 && (
                            <h1 className='text-[18px] font-semibold mb-2'>Дополнительно:</h1>
                        )}
                        <div className='max-h-50 2xl:max-h-100 border-y-2 border-rose-500 m-y-2 rounded-lg p-1 overflow-y-auto scrollbar-rose'>
                            <div className='grid grid-cols-3 xl:grid-cols-4 gap-2'>
                                {product.variations.map((variations) => (
                                    <Variation
                                        key={variations.id}
                                        imageUrl={variations.imageUrl}
                                        name={variations.name}
                                        price={variations.price}
                                        onClick={() => addVariation(variations.id)}
                                        active={selectedVariations.has(variations.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mt-auto pt-8 '>
                        {loading ? (
                            <Button
                                className="w-full lg:w-115 xl:w-125 py-5 lg:py-6 cursor-pointer opacity-50 pointer-events-none"
                            >
                                <Loader2 className='animate-spin' />
                            </Button>
                        ) : (
                            <Button
                                className="w-full lg:w-115 xl:w-125 py-5 lg:py-6 cursor-pointer"
                                onClick={onAddProduct}
                            >
                                Добавить в корзину за {totalPrice} ₽
                            </Button>
                        )}
                    </div>

                </div>
            </div>
        )}
        </>
    );
};