import { cn } from '@/lib/utils';
import { Category } from '@prisma/client';
import { Flower2, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { CartButton } from '../../cart-button';
import { Button } from '../../ui/button';
import { Container } from '../container';
import { MobileCategories } from '../mobile-categories';
import { SearchInput } from '../search.input';

interface Props {
    withData: boolean;
    withCart?: boolean;
    categories?: Category[];
    className?: string;
}

export const Header: React.FC<Props> = ({ className, categories = [], withData = true, withCart = true }) => {

    return (
        <header className={cn('fixed top-0 left-0 w-full z-50 bg-white lg:static', className)}>
            <Container className='flex items-center justify-between lg:py-8 py-2'>
                <Link href="/">
                    <div className='flex items-center xl:gap-4 lg:gap-3 gap-2'>
                        <Flower2 className='2xl:size-8 xl:size-7 lg:size-6 text-rose-500' />
                        <div className=''>
                            <h1 className='font-black xl:text-2xl lg:text-[18px] uppercase tracking-widest'>Provence</h1>
                            <p className='hidden lg:block xl:text-sm lg:text-[12px]  text-gray-400 leading-3'>абсолютная красота</p>
                        </div>
                    </div>
                </Link>
                {withData && (
                    <SearchInput className='hidden lg:block' />
                )}


                <div className='flex items-center xl:gap-4 lg:gap-3'>
                    <Button className={cn('bg-white text-rose-500 lg:border-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-400 cursor-pointer xl:text-[16px] lg:text-sm', withData == false && "border border-rose-500")}>
                        <User />
                        <p className='hidden lg:block'>Войти</p>
                    </Button>
                    {withData && (
                        <CartButton />
                    )}

                </div>
            </Container>
            <Container className='lg:hidden flex justify-center items-center'>
                {withData && (
                    <MobileCategories
                        items={categories}
                    />
                )}

                {withData && (
                    <SearchInput />
                )}
            </Container>
        </header>
    );
};