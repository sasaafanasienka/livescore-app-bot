import {TELEGRAM_TOKEN} from './bot/config/tokens';
import Bot from './bot/bot';
import Server from './server/server';

const server = new Server()

const bot = new Bot(
  TELEGRAM_TOKEN,
  {
    handlerTimeout: Infinity,
  }
)

bot.init();
server.init();
