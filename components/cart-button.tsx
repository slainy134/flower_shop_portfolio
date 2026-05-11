import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { CartDrawer } from './shared/cart-drawer';
import { Button } from './ui/button';

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    return (
        <CartDrawer>
            <div className={className}>
                <Button className='bg-white text-rose-500 lg:border-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-400 cursor-pointer xl:text-[16px] lg:text-sm'>
                    <ShoppingCart />
                </Button>
            </div>
        </CartDrawer>
    );
};