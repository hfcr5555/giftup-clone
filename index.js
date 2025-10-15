import express from "express";
import TelegramBot from "node-telegram-bot-api";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

// вставь сюда свой токен от BotFather
const TOKEN = "8460650274:AAFkjnfCFTA5ByBMwQ0vniQa_jpuxuo14hs";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Привет! 👋 Это твой GiftUp Clone.\n\nНажми кнопку ниже, чтобы открыть мини-приложение.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎁 Открыть GiftUp Clone",
              web_app: { url: "https://giftup-clone.onrender.com" }, // сюда позже вставим ссылку на твоё приложение
            },
          ],
        ],
      },
    }
  );
});

app.get("/", (req, res) => {
  res.send("GiftUp Clone работает 🚀");
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
