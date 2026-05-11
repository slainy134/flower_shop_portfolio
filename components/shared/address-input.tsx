'use client'

import dynamic from 'next/dynamic';
import React from 'react';
import 'react-dadata/dist/react-dadata.css';

const AddressSuggestions = dynamic(
    () => import('react-dadata').then((mod) => mod.AddressSuggestions),
    { ssr: false }
);

interface Props {
    onChange?: (value: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            token="16739727499a3ecbbdcf329f3843a27eb3a5e4f2"
            onChange={(data) => onChange?.(data?.value ?? '')}
        />
    );
};