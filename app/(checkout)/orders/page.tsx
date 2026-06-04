import { ClientOrderBlock } from "@/components/shared/client-order-block";
import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
    const session = await getUserSession()

    if (!session) {
        return redirect('/non-auth')
    }

    const usId = session.id;

    const orders = await prisma.order.findMany({
        where: { userId: usId },
        select: {
            id: true,
            totalAmount: true,
            status: true,
            address: true,
            date: true,
            time: true,
        },
    });

    return (
        <div>
            <h1 className="text-4xl font-bold my-10">Мои заказы</h1>
            {orders.map((order) => (
                <ClientOrderBlock
                    key={order.id}
                    orderId={order.id}
                    status={order.status}
                    totalAmount={order.totalAmount}
                    address={order.address}
                    date={order.date}
                    time={order.time}
                />
            ))}
        </div>
    );
}
