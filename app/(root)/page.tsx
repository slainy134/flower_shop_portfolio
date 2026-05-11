import { Container } from "@/components/shared/container";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    variations: true
                }
            }
        }
    });
    //
    return (
        <>
            <Container className="hidden lg:block 2xl:mt-8 lg:mt-6">
                <h1 className="font-bold 2xl:text-[32px] 2xl:text-3xl xl:text-[28px] lg:text-2xl">
                    Все цветы
                </h1>
            </Container>
            <TopBar categories={categories.filter((categories) => categories.products.length > 0)} className="hidden lg:block" />
            <Container className="pt-30 lg:pt-0">
                <div className="flex-1">
                    <div className="flex flex-col gap-8 lg:gap-16">
                        {categories.map((categories) => (
                            categories.products.length > 0 && (
                                <ProductsGroupList
                                    key={categories.id}
                                    title={categories.name}
                                    categoryId={categories.id}
                                    items={categories.products}
                                />
                            )
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}