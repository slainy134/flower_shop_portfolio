import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await getServerSession(authOptions);

    if (!session || session?.user.role !== "ADMIN") {
        redirect("/");
    }

    return (
        <main className="min-h-screen">
            <Header withData={false} />
            <Container>
                {children}
            </Container>
        </main>
    );
}