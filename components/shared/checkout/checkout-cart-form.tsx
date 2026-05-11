import { ICartItem } from '@/lib/get-cart-details';
import { cn } from '@/lib/utils';
import React from 'react';
import { CheckoutCartItem } from '../checkout-cart-item';
import { WhiteBlock } from '../white-block';

interface Props {
    className?: string;
    onRemove: (id: number) => void;
    items: ICartItem[];
    loading?: boolean;
}

export const CheckoutCartForm: React.FC<Props> = ({ className, onRemove, items, loading }) => {
    return (
        <div className={cn(className, { "opacity-40 pointer-events-none": loading })}>
            <WhiteBlock title="1. Корзина">
                {items.map((item) => (
                    <CheckoutCartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        variations={item.variations?.map((variation) => variation.name).join(', ')}
                        onClickRemove={() => onRemove(item.id)}
                    />
                ))}
            </WhiteBlock>
        </div>
    );
};