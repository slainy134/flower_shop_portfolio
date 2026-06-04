<div align="center">
  <h1>🌸 Интернет-магазин цветов</h1>

  <p>
    <strong>Современный full-stack e-commerce проект</strong> на Next.js с упором на производительность, UX и чистую архитектуру.
  </p>

<p> 
    🚀 Проект находится в стадии активной разработки и постоянно совершенствуется.
</p>

</div>

<br />

---

## ✨ Возможности проекта

- NextAuth(Yandex oAuth)
- Полноценный каталог товаров с вариациями
- Поиск и категории товаров
- Корзина товаров
- Server Components и Server Actions
- Интеграция с PostgreSQL через Prisma ORM
- Формы с валидацией 
- Отправка email-уведомлений через Resend
- Отправка уведомлений в Telegram бота 
- Оплата товаров через YooKassa
- Современный UI на базе shadcn/ui и Radix UI
- Полностью адаптивный дизайн
- Безопасная работа с серверной логикой 

---

## 🛠 Технологический стек

- Next.js 16 + React 19
- TypeScript
- Tailwind CSS 4
- Prisma ORM + PostgreSQL
- Zustand 
- React Hook Form + Zod 
- Radix UI / shadcn/ui
- Resend 
- Axios
- NextAuth
- Node-telegram-bot-api

---

## 🚀 Установка и запуск

### 1. Клонирование проекта

``` bash
git clone 
cd flower-shop-portfolio
```

### 2. Установка зависимостей

``` bash
npm install
```

### 3. Создание базы данных

Создай PostgreSQL базу данных (локально или на сервере).

Пример локальной настройки:

- Database: flower_shop
- User: postgres
- Password: postgres123
- Port: 5432

### 4. Настройка окружения

Создай файл .env.development в корне проекта:

``` bash
DATABASE_URL=***

NEXT_PUBLIC_API_URL=/api

RESEND_API_KEY=***

YOOKASSA_API_KEY=***
YOOKASSA_CALLBACK_URL=***
YOOKASSA_STORE_ID=***
NEXTAUTH_SECRET=***

API_KEY_BOT=***
BOT_CHAT_ID=***
```

### 5. Генерация Prisma клиента

``` bash
npx prisma generate
```

### 7. Заполнение базы тестовыми данными

``` bash
npm run prisma:seed
```

### 8. Запуск проекта

``` bash
npm run dev
```
