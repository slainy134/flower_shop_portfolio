import { OrderItemDTO } from '@/services/dto/category.dto';
import { Dot } from 'lucide-react';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { WhiteBlock } from './white-block';

interface Props {
    className?: string;
    orderId: number;
    status: string;
    totalAmount: number;
    address: string;
    date: string;
    time: string;
    items: OrderItemDTO[];
}

export const AdminOrderBlock: React.FC<Props> = ({ className, orderId, status, totalAmount, address, date, time, items }) => {
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

                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            className=""
                        >
                            <AccordionItem value="products">
                                <AccordionTrigger className='text-[16px]'>Состав заказа</AccordionTrigger>
                                <AccordionContent className='h-fit'>
                                    {items.map((item) => (
                                        <div key={item.id} className='mb-6'>
                                            <div className='w-full border-b border-rose-300' />
                                            <p className='font-bold'>Название товара: <span className='text-rose-500'>{item.product.name}</span></p>
                                            <p>Цена товара: <span className='text-rose-500'>{item.product.price}</span></p>
                                            <p className='font-extrabold'>Дополнительно:</p>
                                            {item.variations.map((variation) => (
                                                <div key={variation.id}>
                                                    <div className='flex'>
                                                        <Dot />
                                                        <p>Название вариации: <span className='text-rose-500'>{variation.name}</span></p>
                                                    </div>

                                                    <p>Цена вариации: <span className='text-rose-500'>{variation.price}</span></p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
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