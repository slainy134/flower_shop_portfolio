'use client';
//добавление продукта - временная версия(просто чтобы было пока что)
import { createProduct } from '@/app/actions';
import { CreateProductInput } from '@/components/shared/create-product/create-product-schema';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CreateProductPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setErrors({});

        const data: CreateProductInput = {
            name: formData.get('name') as string,
            imageUrl: formData.get('imageUrl') as string,
            price: parseInt(formData.get('price') as string),
            description: formData.get('description') as string | undefined,
            categoryId: formData.get('categoryId')
                ? parseInt(formData.get('categoryId') as string)
                : undefined,
        };

        const result = await createProduct(data);

        if (result.success) {
            toast.success(
                'Товар успешно создан!',
                { duration: 3000 }
            )
            router.push('/products-create');
            router.refresh();
        } else {
            if (result.errors) {
                setErrors(result.errors as Record<string, string[]>);
            } else {
                toast.error(
                    'Не удалось добавить товар.',
                    { duration: 3000 }
                )
            }
        }

        setIsLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Добавить новый товар</h1>

            <form action={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Название товара</label>
                    <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Ссылка на изображение</label>
                    <input
                        name="imageUrl"
                        type="url"
                        required
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl[0]}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Цена (руб)</label>
                    <input
                        name="price"
                        type="number"
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price[0]}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Категория</label>
                    <select
                        name="categoryId"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                        <option value="1">Розы</option>
                        <option value="2">Тюльпаны</option>
                        <option value="3">Хризантемы</option>
                        <option value="4">Пионы</option>
                        <option value="5">Сезонные цветы</option>
                        <option value="6">Конфетные композиции</option>
                        <option value="7">Подарки</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Описание(до 70 символов)</label>
                    <textarea
                        name="description"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Подробное описание товара..."
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description[0]}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-rose-500 hover:bg-rose-700 text-white font-medium py-4 rounded-lg transition text-lg"
                >
                    {isLoading ? 'Создаём товар...' : 'Создать товар'}
                </button>
            </form>
        </div>
    );
}