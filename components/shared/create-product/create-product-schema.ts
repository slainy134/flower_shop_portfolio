import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string().min(2, 'Название должно содержать минимум 2 символа'),
    imageUrl: z.string().url('Введите корректную ссылку на изображение').min(1, 'Изображение обязательно'),
    price: z.number().int().positive('Цена должна быть больше 0'),
    description: z.string().min(10, 'Описание должно быть минимум 10 символов').optional(),
    categoryId: z.number().int().positive().optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;