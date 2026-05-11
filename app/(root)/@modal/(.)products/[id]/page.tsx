import { ChooseProductModal } from "@/components/shared/modal/choose-product-modal";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({ params, }: { params: Promise<{ id: string }>; }) {

    const { id: stringId } = await params;

    const id = Number(stringId);

    if (isNaN(id) || id < 1) {
        notFound();
    }

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            variations: true,
        }
    })

    if (!product) {
        return notFound();
    }

    return (
        <ChooseProductModal product={product} />);
}