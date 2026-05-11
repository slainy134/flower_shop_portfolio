import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const query = req.nextUrl.searchParams.get('q') || '';

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive"
            },
        },
        take: 8,
    })

    return NextResponse.json(products)
}