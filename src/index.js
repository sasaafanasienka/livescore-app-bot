import { Telegraf, Markup } from "telegraf";
import { User, runMongo } from "./modules/mongo.js";
import WebSocket from 'ws';
import { initBot } from "./modules/bot/bot.js";
import { API_TOKEN } from "./config/tokens.js";

const bot = initBot();
// import config from "config";

// User.findOne({ telegram_id: user_id })
//   .then((user) => {
//     if (user) {
//       // Пользователь найден, проверить наличие подписки
//       const subscriptionIndex = user.subscriptions.indexOf(team_id);
      
//       if (subscriptionIndex !== -1) {
//         ctx.reply('Successfully unsubscribed')
//         // Если подписка существует, удалить её
//         user.subscriptions.splice(subscriptionIndex, 1);
//       } else {
//         ctx.reply('Successfully subscribed')
//         // Если подписка не существует, добавить её
//         user.subscriptions.push(team_id);
//       }
      
//       // Сохранить обновленного пользователя
//       return user.save();
//     } else {
//       // Пользователь не найден, создать нового пользователя с подпиской
//       const newUser = new User({
//         telegram_id: user_id,
//         subscriptions: [team_id],
//       });
//       ctx.reply('Successfully subscribed')

//       return newUser.save();
//     }
//   })
//   .then((updatedUser) => {
//     console.log('Пользователь после операции добавления/удаления подписки:', updatedUser);
//   })
//   .catch((error) => {
//     console.error('Ошибка при выполнении операции добавления/удаления подписки:', error);
//   });


// runMongo().catch(console.dir);
// bot.launch()


// const ws = new WebSocket(`wss://wss.apifootball.com/livescore?WidgetKey=${API_TOKEN}&timezone=+03:00`); // Адрес WebSocket сервера

// ws.on('open', () => {
//   console.log('Успешное подключение к серверу');
  
//   // Отправляем сообщение на сервер
//   ws.send('Привет, сервер!');
// });

// ws.on('message', (message) => {
//   const data = JSON.parse(message);

//   // Ваша логика обработки сообщения от WebSocket сервера
//   // Например, отправка ответного сообщения пользователю через бота
//   const chatId = data.chatId;
//   const responseText = `Ответ от сервера: ${data.text}`;

//   bot.telegram.sendMessage(chatId, responseText);
// });
