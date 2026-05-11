import { Product, Variation } from "@prisma/client";

export type IProduct = Product & { variations: Variation[] }