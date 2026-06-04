interface Props {
    firstName: string;
    lastName: string;
    phone: string;
    totalAmount: number;
    email: string;
    address: string;
    date: string;
    time: string;
    items: string;
    comment?: string;
}

export function OrderCreatedTemplate(data: Props) {
    return `
<b>Новый заказ!</b>

👤 Имя пользователя: ${data.firstName} ${data.lastName}

📞 Номер телефона: ${data.phone}

📧 Email: ${data.email}

📍 Адрес доставки: ${data.address}

📅 Дата доставки: ${data.date}

🕒 Время доставки: ${data.time}

💬 Комментарий пользователя: ${data.comment || 'Не указан'}

💰 Сумма заказа: ${data.totalAmount} ₽

<b>Состав заказа:</b>
${data.items}
`   ;
}