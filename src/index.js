import { Telegraf } from "telegraf";
import { TELEGRAM_TOKEN } from "../../config/tokens.js";
import { start } from "./commands/start.js";

class Bot extends Telegraf {
  constructor(TOKEN, options) {
    super(TOKEN, options)
  }

  init = () => {
    // this.addMethods();
    this.launch();
    this.command('start', (ctx) => {
      ctx.reply(['Пизда', 'с говном'][Math.random() - 0.5 > 0 ? 0 : 1])
    })  
  }

  addMethods = () => {
    this.command('start', start)  
    // this.action(/GET_COMPETITIONS:(.+)/, getCompetition)
  }
}

export const initBot = () => {
  const bot = new Bot(TELEGRAM_TOKEN, {
    handlerTimeout: Infinity
  })
  bot.init();
  return bot;
}

