// import Server from './backend/server.js';
import {TELEGRAM_TOKEN} from './bot/config/tokens';
import Bot from './bot/bot';

// const server = new Server()

const bot = new Bot(
  TELEGRAM_TOKEN,
  {
    handlerTimeout: Infinity,
  }
)

bot.init();
// server.init();
