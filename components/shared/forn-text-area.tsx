'use client'

import { Textarea } from '@/components/ui/textarea';
import { Asterisk, X } from 'lucide-react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormTextArea: React.FC<Props> = ({ className, name, label, required, ...props }) => {
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
                <Textarea className='text-[14px] w-full wrap-break-word whitespace-pre-wrap' {...register(name)} {...props} />


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