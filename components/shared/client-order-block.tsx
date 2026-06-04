import React from 'react';
import { WhiteBlock } from './white-block';

interface Props {
    className?: string;
    orderId: number;
    status: string;
    totalAmount: number;
    address: string;
    date: string;
    time: string;
}

export const ClientOrderBlock: React.FC<Props> = ({ className, orderId, status, totalAmount, address, date, time }) => {
    const formattedDate = date.split(' 00:00:00')[0];

    let ruStatus = status;

    switch (status) {
        case 'PENDING':
            ruStatus = 'В обработке';
            break;
        case 'COMPLETED':
            ruStatus = 'Оплачен';
            break;
        case 'CANCELLED':
            ruStatus = 'Отменён';
            break;
    }

    return (
        <div className={className}>
            <WhiteBlock className='md:w-1/2 my-8 py-0'>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-bold'>Заказ №{orderId}</h1>
                        <span className='text-xl font-semibold text-rose-500'>{ruStatus}</span>
                    </div>

                    <div className='flex flex-col gap-3 my-3'>
                        <p className='font-semibold'>Адрес доставки:
                            <span className='font-normal'> {address}</span>
                        </p>
                        <p className='font-semibold'>Дата доставки:
                            <span className='font-normal'> {formattedDate}</span>
                        </p>
                        <p className='font-semibold'>Время доставки:
                            <span className='font-normal'> {time}</span>
                        </p>
                    </div>
                </div>

                <div>
                    <p className='text-xl font-normal'>Итого:
                        <span className='font-semibold'> {totalAmount}</span>
                    </p>
                </div>

            </WhiteBlock>
        </div>
    );
};