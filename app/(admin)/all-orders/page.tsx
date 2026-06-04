import { AdminOrderBlock } from "@/components/shared/admin-order-block";
import { prisma } from "@/prisma/prisma-client";
import { OrderItemDTO } from "@/services/dto/category.dto";

export default async function AllOrdersPage() {
    const orders = await prisma.order.findMany({
        select: {
            id: true,
            totalAmount: true,
            status: true,
            address: true,
            date: true,
            time: true,
            items: true,
        },
    });

    return (
        <div>
            <h1 className="text-4xl font-bold my-10">Мои заказы</h1>
            {orders.map((order) => (
                <AdminOrderBlock
                    key={order.id}
                    orderId={order.id}
                    status={order.status}
                    totalAmount={order.totalAmount}
                    address={order.address}
                    date={order.date}
                    time={order.time}
                    items={order.items as unknown as OrderItemDTO[]}
                />
            ))}
        </div>
    );
}
