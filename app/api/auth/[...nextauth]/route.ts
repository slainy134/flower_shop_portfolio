import { prisma } from "@/prisma/prisma-client";
import NextAuth, { NextAuthOptions } from "next-auth";
import YandexProvider from "next-auth/providers/yandex";

export const authOptions: NextAuthOptions = {
    providers: [
        YandexProvider({
            clientId: process.env.YANDEX_CLIENT_ID ?? "",
            clientSecret: process.env.YANDEX_CLIENT_SECRET ?? "",

            authorization: {
                params: {
                    scope: "login:info login:email login:default_phone",
                },
            },

            profile(profile) {
                return {
                    id: String(profile.id),
                    name: profile.display_name || profile.real_name || profile.login || "Yandex User",
                    email: profile.default_email || null,
                    firstName: profile.first_name || null,
                    lastName: profile.last_name || null,
                    phone: profile.default_phone?.number || null,
                };
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },

    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "yandex") {
                try {
                    const fullName =
                        `${(user as any).firstName || ""} ${(user as any).lastName || ""}`.trim() ||
                        user.name ||
                        "Yandex User";

                    let dbUser = await prisma.user.findFirst({
                        where: { providerId: user.id },
                    });

                    if (!dbUser) {
                        dbUser = await prisma.user.create({
                            data: {
                                fullName,
                                phone: (user as any).phone || null,
                                firstName: (user as any).firstName || null,
                                lastName: (user as any).lastName || null,
                                email: user.email || null,
                                password: "",
                                provider: "yandex",
                                providerId: user.id,
                                verified: new Date(),
                                role: "USER",
                            },
                        });
                    }

                    (user as any).id = dbUser.id;
                    (user as any).role = dbUser.role;
                    return true;
                } catch (error: any) {
                    console.error("❌ Ошибка signIn callback:", error.message);
                    return false;
                }
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user) {
                token.id = (user as any).id || user.id;
                token.email = (user as any).id || user.email;
                token.firstName = (user as any).firstName;
                token.lastName = (user as any).lastName;
                token.phone = (user as any).phone;
                token.role = (user as any).role;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id;
                (session.user as any).email = token.email;
                (session.user as any).firstName = token.firstName;
                (session.user as any).lastName = token.lastName;
                (session.user as any).phone = token.phone;
                (session.user as any).role = token.role;
            }
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

