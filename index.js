import Server from './backend/server.js';
import {TELEGRAM_TOKEN} from './bot/src/config/tokens.js';
import Bot from './bot/src/index.js';

const bot = new Bot(TELEGRAM_TOKEN, {
  handlerTimeout: Infinity
})

const server = new Server()

bot.init();
server.init();
