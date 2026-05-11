import { Container } from '@/components/shared/container';
import { Header } from '@/components/shared/header/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Flowers Shop | Корзина",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode; }) {
    return (

        <main className="min-h-screen bg-[#F4F1EE]">
            <Header withData={false} withCart={false} className='bg-[#F4F1EE]' />
            <Container>
                <div className='border border-t-[#DEDEDE]' />
                {children}
            </Container>
        </main>
    );
}
