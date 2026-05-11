'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { cn } from '@/lib/utils';
import { useCartStore } from "@/store/cart";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import React from 'react';
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { CartDrawerItem } from "./cart-drawer-item";
interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {

    const { totalAmount, items, removeCartItem } = useCart();
    const loading = useCartStore(state => state.loading)
    return (
        <div className={cn("", className)}>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent showCloseButton={false}>
                    <SheetHeader>
                        <SheetTitle>
                            {totalAmount > 0 ? (
                                <p className="text-[20px]">Товаров в корзине: <span className="font-bold">{items.length}</span></p>
                            ) : (
                                <VisuallyHidden>Корзина пуста</VisuallyHidden>
                            )}
                        </SheetTitle>
                    </SheetHeader>

                    {!totalAmount && (
                        <div className="flex flex-col justify-center items-center mx-auto h-full">
                            <img src="/empty-box.png" alt="emptybox" className="size-20 lg:size-24" />
                            <h1 className="text-[22px] font-bold">Корзина пустая</h1>
                            <p className="text-center text-[16px] text-[#777777] font-normal">Добавьте хотя бы один товар, чтобы совершить заказ</p>
                            <SheetClose className="mt-4 p-2 flex items-center text-white bg-rose-500 rounded-lg cursor-pointer gap-2 hover:bg-white hover:border hover:border-rose-500 hover:text-rose-500 duration-300 transition-colors`">
                                <ArrowLeft className="size-4" />
                                Выбрать товары
                            </SheetClose>
                        </div>
                    )}

                    <div className="overflow-auto scrollbar-rose">
                        {items.map((item) => (
                            <CartDrawerItem
                                key={item.id}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                variations={item.variations?.map((variation) => variation.name).join(', ')}
                                onClickRemove={() => removeCartItem(item.id)}
                                loading={loading}
                            />
                        ))}
                    </div>
                    {totalAmount > 0 && (
                        <SheetFooter className="mx-8 gap-4 text-[16px]">
                            <div className="flex justify-between">
                                <p>Итого:</p>
                                <span className="font-bold">{totalAmount} ₽</span>
                            </div>
                            <Link href="/checkout">
                                <Button className="flex items-center text-[16px] gap-4 py-6 cursor-pointer w-full">
                                    <p>Оформить заказ</p>
                                    <ArrowRight />
                                </Button>
                            </Link>
                        </SheetFooter>
                    )}

                    <div className='absolute right-4 top-4 text-rose-500 hover:text-rose-700'>
                        <DialogClose>
                            <X className="cursor-pointer" />
                        </DialogClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};