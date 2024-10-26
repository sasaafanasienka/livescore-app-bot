import bot from './bot.js';

bot.launch();

// Включаем плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Бот запущен');