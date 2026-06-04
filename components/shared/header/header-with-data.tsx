import { getCategories } from "@/services/cache/get-categories";
import { Header } from "./header";

export async function HeaderWithData() {
    const categories = await getCategories()
    return (
        <Header withData={true} categories={categories} />
    )
}