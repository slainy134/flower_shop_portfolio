import { prisma } from "@/prisma/prisma-client";
import { Header } from "./header";

export async function HeaderWithData() {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    variations: true
                }
            }
        }
    });
    return (
        <Header withData={true} categories={categories.filter((categories) => categories.products.length > 0)} />
    )
}