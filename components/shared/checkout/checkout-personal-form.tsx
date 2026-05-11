import React from 'react';
import { FormInput } from '../form-input';
import { WhiteBlock } from '../white-block';

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <WhiteBlock
                title="2. Персональная информация"
            >
                <div className='flex flex-col xs:gap-4 lg:gap-8'>
                    <div className='flex xs:flex-col lg:flex-row lg:justify-between gap-4 lg:w-full'>
                        <FormInput label='Имя' name='firstName' placeholder='FirstName' />
                        <FormInput label='Фамилия' name='lastName' placeholder='LastName' className='lg:pr-40' />
                    </div>

                    <div className='flex xs:flex-col lg:flex-row lg:justify-between gap-4'>
                        <FormInput label='E-Mail' name='email' placeholder='E-Mail' />
                        <FormInput label='Телефон' name='phone' placeholder='Phone' className='lg:pr-40' />
                    </div>

                </div>
            </WhiteBlock>
        </div>
    );
};