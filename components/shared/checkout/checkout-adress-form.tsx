import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AddressInput } from '../address-input';
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