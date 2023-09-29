import { Telegraf } from "telegraf";
import { TELEGRAM_TOKEN, WEATHER_TOKEN } from "./config/tokens.js";

class Bot extends Telegraf {
  constructor(TOKEN, options) {
    super(TOKEN, options);
    this.lat = '53.8601';
    this.lon = '27.5634';
    this.temp = 0;
    this.intervalId = 0;
    this.started = false;
  }

  init = () => {
    this.launch();
    this.command('start', (ctx) => {
      this.started = true;
      this.intervalId = setInterval(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${WEATHER_TOKEN}`).then(response => response.json()).then(data => {
          const temp = (data.main.temp - 273).toFixed(2)
          ctx.reply(`${data.name}, ${data.sys.country}`)
          ctx.reply(`${(data.main.temp - 273).toFixed(2)} C`)
          this.temp = temp;
          // ctx.reply(temp);
          // ctx.reply(String(temp === this.temp))
          // ctx.reply(this.temp);
          // ctx.reply('Вы подписались')
          // if (temp !== this.temp) {
          // }
        })
      }, 10000)
    })
    this.command('stop', (ctx) => {
      if (this.started) {
        clearInterval(this.intervalId)
        ctx.reply('Вы отписались')
      } else {
        ctx.reply('Вы и так не были подписаны')
      }
    })
  }

  addMethods = () => {
    this.command('start', start)  
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

