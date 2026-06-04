import { ChooseProductModal } from "@/components/shared/modal/choose-product-modal";
import { getProducts } from "@/services/cache/get-products";
import { notFound } from "next/navigation";

export default async function ProductModalPage({ params, }: { params: Promise<{ id: string }>; }) {

    const { id: stringId } = await params;

    const id = Number(stringId);

    if (isNaN(id) || id < 1) {
        notFound();
    }

    const product = await getProducts(id);

    if (!product) {
        return notFound();
    }

    return (
        <ChooseProductModal product={product} />);
}