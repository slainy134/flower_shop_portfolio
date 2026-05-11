'use client'

import { createOrder } from "@/app/actions";
import { CheckoutAdressForm } from "@/components/shared/checkout/checkout-adress-form";
import { CheckoutCartForm } from "@/components/shared/checkout/checkout-cart-form";
import { checkoutFormSchema, TCheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { CheckoutPersonalForm } from "@/components/shared/checkout/checkout-personal-form";
import { CheckoutSideBar } from "@/components/shared/checkout/checkout-side-bar";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CheckoutPage() {

    const [submitting, setSubmitting] = useState(false)

    const form = useForm<TCheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            comment: '',
        }
    })

    const onSubmit = async (data: TCheckoutFormValues) => {
        try {
            setSubmitting(true)

            const url = await createOrder(data)

            if (url) {
                location.href = url;
            }

            toast.success(
                'Заказ успешно создан!',
                { duration: 3000 }
            )
        } catch (err) {
            setSubmitting(false)

            console.log(err)

            toast.error(
                'Не удалось создать заказ',
                { duration: 3000 }
            )
        }
    }

    const { totalAmount, removeCartItem, items, loading } = useCart();
    const deliveryCost = 300;
    const totalCost = totalAmount + deliveryCost;
    return (
        <div className="lg:mt-10 xs:mt-16">
            <h1 className="font-bold text-[22px] 2xl:text-[32px] 2xl:text-3xl xl:text-[28px] lg:text-2xl mb-10">Оформление заказа</h1>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex xs:flex-col lg:flex-row gap-8">

                        <div className="flex flex-col flex-1 gap-8">
                            <CheckoutCartForm onRemove={removeCartItem} items={items} loading={loading} />
                            <CheckoutPersonalForm className={cn({ "opacity-40 pointer-events-none": loading })} />
                            <CheckoutAdressForm className={cn("lg:mb-16", { "opacity-40 pointer-events-none": loading })} />
                        </div>
                        <div className="lg:w-112.5 w-full xs:mb-10 lg:mb-0">
                            <CheckoutSideBar finalPrice={totalCost} cartPrice={totalAmount} deliveryPrice={deliveryCost} loading={loading || submitting} />
                        </div>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}