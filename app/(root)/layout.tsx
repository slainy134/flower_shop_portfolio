import { Footer } from "@/components/shared/footer";
import { HeaderWithData } from "@/components/shared/header/header-with-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowers Shop | Главная",
};

export default async function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <HeaderWithData />
      {children}
      {modal}
      <Footer />
    </main>
  );
}
