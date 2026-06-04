import { Providers } from "@/components/shared/providers";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
