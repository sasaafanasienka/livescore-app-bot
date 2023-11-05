import Server from './backend/server.js';
import {TELEGRAM_TOKEN} from './bot/src/config/tokens.js';
import Bot from './bot/src/bot.js';

const server = new Server()

const bot = new Bot(
  TELEGRAM_TOKEN,
  {
    handlerTimeout: Infinity,
  },
  { server: server }
)

bot.init();
server.init();
