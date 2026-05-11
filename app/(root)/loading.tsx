export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center px-6">
                <div className="relative inline-flex">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-rose-500 rounded-full animate-spin"></div>
                </div>
                <h1 className="mt-8 text-3xl font-bold text-gray-800">Загружаем страницу</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-md mx-auto">
                    Подготавливаем товары...
                </p>
            </div>
        </div>
    );
}