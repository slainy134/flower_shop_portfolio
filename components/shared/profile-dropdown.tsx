import { cn } from '@/lib/utils';
import { CircleUser, Cog, List, ListOrdered, LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

interface Props {
    className?: string;
    withData: boolean;
    withAdmin: boolean;
    onClickSignOut: () => void;
}

export const ProfileDropdown: React.FC<Props> = ({ className, withData, onClickSignOut, withAdmin }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className={cn('bg-white text-rose-500 lg:border-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-400 cursor-pointer xl:text-[16px] lg:text-sm',
                        withData == false && "border border-rose-500"
                    )}>
                    <CircleUser />
                    <p className='hidden lg:block'>Профиль</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='center'>
                {withAdmin && (
                    <>
                        <Link href='/all-orders'>
                            <DropdownMenuItem className='cursor-pointer'>
                                <List className='text-rose-500' />
                                Все заказы
                            </DropdownMenuItem>
                        </Link>

                        <Link href='/products-create'>
                            <DropdownMenuItem className='cursor-pointer'>
                                <Cog className='text-rose-500' />
                                Редактор
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                    </>
                )}
                <Link href='/orders'>
                    <DropdownMenuItem className='cursor-pointer'>
                        <ListOrdered className='text-rose-500' />
                        Заказы
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onClickSignOut} className='cursor-pointer'>
                    <LogOutIcon className='text-rose-500' />
                    Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};