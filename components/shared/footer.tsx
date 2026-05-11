import { cn } from '@/lib/utils';
import { Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import React from 'react';

interface Props {
    className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
    return (
        <footer className={cn('relative from-pink-50/80 to-white pt-20 pb-12 mt-20 overflow-hidden', className)}>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="https://plus.unsplash.com/premium_photo-1769900501605-fa7f1286c474?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Нежные цветы фон"
                    className="w-full h-full object-cover blur-sm brightness-95 opacity-40"
                />
                <div className="absolute inset-0 from-white via-white/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 xl:max-w-5xl lg:max-w-4xl">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16 lg:gap-24">
                    <div className="text-center md:text-left">
                        <h3 className="xl:text-3xl lg:text-2xl font-serif font-medium text-rose-700 mb-4">Provence</h3>
                        <p className="text-gray-600 xl:text-sm lg:text-xs leading-relaxed whitespace-nowrap">
                            • Абсолютная красота<br />
                            • Быстрая доставка<br />
                            • Ваш маленький праздник каждый день
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="font-medium text-gray-800 mb-4">Контакты</h4>
                        <ul className="space-y-3 text-gray-600 xl:text-sm lg:text-xs">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Phone size={18} className="text-rose-600" />
                                <a className="hover:text-rose-600">+7 XXX XXX XX XX</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Mail size={18} className="text-rose-600" />
                                <a className="hover:text-rose-600">
                                    ***@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin size={18} className="text-rose-600 mt-1" />
                                <span>**Адрес**</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left whitespace-nowrap">
                        <h4 className="font-medium text-gray-800 mb-4">Будь с нами</h4>
                        <div className="flex justify-center gap-8">
                            <a href="" className="cursor-pointer text-gray-500 hover:text-rose-600 transition-colors" target="_blank">
                                <Instagram className='xl:size-8 lg:size-6' />
                            </a>
                            <a href="" className="cursor-pointer text-gray-500 hover:text-rose-600 transition-colors" target="_blank">
                                <Send className='xl:size-8 lg:size-6' />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-12 text-center text-gray-500 xl:text-sm lg:text-xs">
                    © {new Date().getFullYear()} Provence — цветы с любовью
                </div>
            </div>
        </footer>
    );
};