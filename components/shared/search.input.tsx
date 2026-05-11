'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { useClickAway } from '@uidotdev/usehooks';
import { ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useDebounce } from 'react-use';
import { Input } from '../ui/input';

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [products, setProducts] = React.useState<Product[]>([])
    const [focused, setFocused] = React.useState(false);
    const ref = useClickAway<HTMLDivElement>(() => {
        setFocused(false);
    });

    useDebounce(() => {
        Api.products.search(searchQuery).then(items => {
            setProducts(items)
        })
    }, 300, [searchQuery])

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('')
        setProducts([])
    }

    return (
        <>
            {focused && <div className="fixed inset-0 bg-black/50 z-30" />}
            <div ref={ref} className="relative w-full lg:w-1/2 z-30">
                <div className={cn("border border-rose-500 rounded-lg z-30", className, focused && "max-lg:hidden")}>
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Найти цветы..."
                        className="w-full pl-8 bg-white"
                        onFocus={() => setFocused(true)}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                {focused && (
                    <div className={cn(
                        "bg-white z-30 overflow-hidden",
                        "lg:absolute lg:mt-2 lg:w-full lg:rounded-lg lg:shadow-md lg:max-h-100",
                        "max-lg:fixed max-lg:inset-0 max-lg:rounded-none max-lg:z-40 max-lg:overflow-y-auto"
                    )}>
                        <div className="lg:hidden flex items-center gap-3 px-4 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                            <button onClick={onClickItem} className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors">
                                <ArrowLeft className="h-6 w-6" />
                            </button>
                            <div className="flex-1 border border-rose-500 rounded-lg relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Найти цветы..."
                                    className="w-full pl-8 bg-white border-0"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div>
                            {products.length > 0 ? (
                                products.map(product => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        onClick={onClickItem}
                                        className="block hover:bg-gray-50 transition-colors"
                                    >
                                        <p className="mx-8 my-6">
                                            <span className="xl:text-[16px] lg:text-[14px]">{product.name}</span>
                                            <span className="ml-3 opacity-40 xl:text-[14px] lg:text-xs">{product.price}₽</span>
                                        </p>
                                    </Link>
                                ))
                            ) : (
                                <p className="mx-8 my-6 text-center text-gray-500">Ничего не найдено</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};