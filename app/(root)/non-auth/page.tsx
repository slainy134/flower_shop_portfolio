import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function NonAuthPage() {
    return (
        <div className="flex flex-col items-center gap-5 mt-16">
            <Lock className="text-rose-500" size={100} />
            <h1 className="text-4xl font-bold">Доступ запрещён</h1>
            <p className="text-2xl font-normal opacity-50">Данную страницу могут просматривать только авторизованные пользователи</p>
            <Link href='/'>
                <Button className="mt-3 cursor-pointer">
                    На главную
                </Button>
            </Link>
        </div>
    );
}
