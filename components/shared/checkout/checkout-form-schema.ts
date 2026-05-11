import z from "zod/v3";

export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, { message: "Не менее 2-х символов" }),
    lastName: z.string().min(2, { message: "Не менее 2-х символов" }),
    email: z.string().email({ message: "Введите корректную почту" }),
    phone: z.string().min(10, { message: "Введите корректный номер" }),
    address: z.string().min(5, { message: "Введите корректный адрес" }),
    comment: z.string().optional(),
})

export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>