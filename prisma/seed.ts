import { hashSync } from "bcrypt";
import { categories, products, productVariations, variations } from "./constants";
import { prisma } from "./prisma-client";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            }
        ]
    });

    await prisma.category.createMany({
        data: categories,
    })

    await prisma.variation.createMany({
        data: variations,
    })

    await prisma.product.createMany({
        data: products,
    })

    for (const item of productVariations) {
        await prisma.product.update({
            where: { id: item.productId },
            data: {
                variations: {
                    connect: item.variationIds.map((id) => ({ id })),
                },
            },
        });
    }

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "1212"
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "1211"
            }
        ]
    })

    await prisma.cartItem.createMany({
        data: [
            {
                productId: 1,
                cartId: 1
            },
            {
                productId: 2,
                cartId: 2
            }
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });