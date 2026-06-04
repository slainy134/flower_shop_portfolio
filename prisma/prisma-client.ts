import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL не задан в .env");
}

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  const SLOW_QUERY_THRESHOLD = 100;

  (prisma as any).$on("query", (e: any) => {
    if (e.duration < 100) return;

    console.warn("🐌 SLOW QUERY");
    console.warn("⏱", e.duration);
    console.warn("📌", e.query);
    console.warn("📦", e.params);
  });

  globalForPrisma.prisma = prisma;
}