import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email?: string;
            firstName?: string;
            lastName?: string;
            phone?: string;
            name?: string;
            role?: string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: number;
        email?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        role?: string;
    }
}