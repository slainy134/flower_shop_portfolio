'use client'

import { Asterisk, X } from 'lucide-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext()

    const value = watch(name)
    const errorText = errors[name]?.message as string

    const onClickClear = () => { setValue(name, '') }

    return (
        <div className={className}>
            {label && (
                <p className='font-bold text-[14px] pb-1'>
                    {label} {required && <Asterisk className='text-red-500' />}
                </p>
            )}

            <div className='flex items-center gap-2'>
                <Input className='text-[14px]' {...register(name)} {...props} />


                {value ? (
                    <X
                        className='size-5 text-gray-500 cursor-pointer pointer-events-auto'
                        onClick={onClickClear}
                    />
                ) : (<div className='pr-5'></div>)}
            </div>

            {errorText && <p className='text-[10px] text-red-500'>{errorText}</p>}
        </div>
    );
};