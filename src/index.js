import { Telegraf } from "telegraf";
import { TELEGRAM_TOKEN, WEATHER_TOKEN } from "./config/tokens.js";

class Bot extends Telegraf {
  constructor(TOKEN, options) {
    super(TOKEN, options);
    this.lat = '53.8601';
    this.lon = '27.5634';  
  }

  init = () => {
    // this.addMethods();
    this.launch();
    this.command('start', (ctx) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${WEATHER_TOKEN}`).then(response => response.json()).then(data => {
        ctx.reply(`${data.name}, ${data.sys.country}`)
        ctx.reply(`${data.main.temp - 273}`)
      })
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

initBot();

