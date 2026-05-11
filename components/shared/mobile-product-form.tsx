import { IProduct } from '@/@types/prisma';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Variation } from './variation';

interface Props {
    product: IProduct;
    totalPrice: number;
    loading: boolean;
    onAddProduct: () => void;
    selectedVariations: Set<number>;
    addVariation: (id: number) => void;
    className?: string;
}

export const MobileProductForm: React.FC<Props> = ({ className, product, totalPrice, loading, onAddProduct, selectedVariations, addVariation }) => {
    return (
        <div className={cn(className, "flex-1 overflow-y-auto p-4")}>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-xl font-bold text-center pb-4">{product.name}</h1>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="items-center max-w-4/5 rounded-lg"
                    />
                    <p
                        className="font-normal text-xs md:text-sm mt-4 py-2 px-1 text-center border border-rose-500 rounded-lg">
                        {product.description}
                    </p>
                    {loading ? (
                        <Button
                            className="w-4/5 mt-4 opacity-50 pointer-events-none"
                        >
                            <Loader2 className='animate-spin' />
                        </Button>
                    ) : (
                        <Button
                            className="w-4/5 mt-4 cursor-pointer"
                            onClick={onAddProduct}
                        >
                            Добавить в корзину за {totalPrice} ₽
                        </Button>
                    )}


                </div>

                <div className='flex flex-col items-center'>
                    {product.variations.length > 0 && (
                        <h2 className='text-center text-[18px] font-semibold mt-4 pb-4'>Дополнительно:</h2>
                    )}
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-2'>
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
        </div>
    );
};