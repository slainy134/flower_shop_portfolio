import { ChooseProduct } from "@/components/shared/choose-product";
import { Container } from "@/components/shared/container";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({ params, }: { params: Promise<{ id: string }>; }) {
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
        notFound();
    }

    return (
        <Container className="flex flex-col pt-20 lg:pt-10">
            <ChooseProduct product={product} />
        </Container>
    );
}