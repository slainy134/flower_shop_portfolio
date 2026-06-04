import TelegramBot from 'node-telegram-bot-api';

const token = process.env.API_KEY_BOT || '';


export const bot = new TelegramBot(token, { polling: false });

if (!token) {
    throw new Error("API_KEY_BOT not found");
}

export async function sendTelegramMessage(text: string) {
    await bot.sendMessage(
        process.env.BOT_CHAT_ID!,
        text,
        {
            parse_mode: "HTML",
        }
    )
}
