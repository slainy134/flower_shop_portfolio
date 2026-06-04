import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressInput } from '../address-input';
import { DatePickerInput } from '../date-picker-input';
import { FormTextArea } from '../forn-text-area';
import { WhiteBlock } from '../white-block';

interface Props {
    className?: string;
}

export const CheckoutAdressForm: React.FC<Props> = ({ className }) => {
    const { control } = useFormContext();

    return (
        <div className={className}>
            <WhiteBlock
                title="3. Адрес доставки"
            >
                <div className='flex flex-col gap-6'>
                    <Controller
                        control={control}
                        name="address"
                        render={({ field, fieldState }) =>
                            <>
                                <AddressInput onChange={field.onChange} />
                                {fieldState.error?.message && <p className='text-[12px] text-red-500'>{fieldState.error.message}</p>}
                            </>}
                    />
                    <div className='flex justify-between'>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field, fieldState }) => (
                                <>
                                    <DatePickerInput
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                    {fieldState.error?.message && (
                                        <p className='text-[12px] text-red-500'>{fieldState.error.message}</p>
                                    )}
                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="time"
                            render={({ field, fieldState }) => (
                                <Field className="w-80">
                                    <FieldLabel
                                        htmlFor="time-picker-optional"
                                        className="font-bold text-[14px]"
                                    >
                                        Время
                                    </FieldLabel>
                                    <Input
                                        type="time"
                                        id="time-picker-optional"
                                        step="1"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none cursor-text"
                                    />
                                    {fieldState.error?.message && (
                                        <p className='text-[12px] text-red-500'>{fieldState.error.message}</p>
                                    )}
                                </Field>
                            )}
                        />
                    </div>

                    <FormTextArea
                        name='comment'
                        label='Комментарий к заказу'
                        placeholder='Comment to order'
                    />
                </div>

            </WhiteBlock>
        </div>
    );
};