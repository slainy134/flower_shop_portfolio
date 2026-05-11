'use client';

import { IProduct } from '@/@types/prisma';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { useChooseProduct } from '@/hooks/use-choose-product';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Loader2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MobileProductForm } from '../mobile-product-form';
import { Variation } from '../variation';

interface Props {
    product: IProduct;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    const { selectedVariations, addVariation, totalPrice, onAddProduct, loading } = useChooseProduct(product, () => router.back());

    const isMobile = useIsMobile(1023);

    return (
        <>{isMobile ? (
            <Drawer open={Boolean(product)} onOpenChange={() => router.back()}>
                <DrawerContent>
                    <VisuallyHidden asChild>
                        <DrawerTitle>Выбор товара</DrawerTitle>
                    </VisuallyHidden>
                    <MobileProductForm
                        product={product}
                        selectedVariations={selectedVariations}
                        totalPrice={totalPrice}
                        addVariation={addVariation}
                        onAddProduct={onAddProduct}
                        loading={loading}
                    />
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
                <DialogContent aria-describedby={undefined} showCloseButton={false} className={cn(className, "flex flex-row max-w-[95vw] lg:max-w-[90vw] xl:max-w-265")}>
                    <VisuallyHidden asChild>
                        <DialogTitle>Выбор товара</DialogTitle>
                    </VisuallyHidden>

                    <div className="lg:max-w-[45vw] xl:max-w-125">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="size-[80vw] lg:size-96 xl:size-132.5 rounded-lg"
                        />
                    </div>
                    <div className="lg:max-w-[45vw] xl:max-w-125 flex flex-col">
                        <div className="lg:max-w-[80%] xl:max-w-100">
                            <h1 className="font-bold text-xl lg:text-2xl">{product.name}</h1>
                            <p className="font-normal text-xs pt-2 line-clamp-3">{product.description}</p>
                        </div>
                        {product.variations.length > 0 && (
                            <div className='xl:pt-4 lg:pt-2'>
                                <h2 className='font-semibold text-lg'>Дополнительно:</h2>
                            </div>
                        )}


                        <div className='xl:h-80 lg:h-48 scrollbar-rose '>
                            <div className='grid grid-cols-3 xl:pt-5 lg:pt-2 lg:max-w-125'>
                                {product.variations.map((variations) => (
                                    <Variation
                                        key={variations.id}
                                        imageUrl={variations.imageUrl}
                                        name={variations.name}
                                        price={variations.price}
                                        onClick={() => addVariation(variations.id)}
                                        active={selectedVariations.has(variations.id)}
                                    />
                                ))}</div>
                        </div>

                        <div className="flex mt-auto">

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

                    <div className='absolute right-4 top-4 text-rose-500 hover:text-rose-700'>
                        <DialogClose>
                            <X className="cursor-pointer" />
                        </DialogClose>
                    </div>

                </DialogContent>
            </Dialog>
        )}
        </>
    );
};