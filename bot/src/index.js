import { Telegraf } from "telegraf";
import { TELEGRAM_TOKEN } from "./config/tokens.js";

class Bot extends Telegraf {
  constructor(TOKEN, options) {
    super(TOKEN, options);
    this.players = [
      { name: 'Sasha Afanasienka', id: 227431181 },
      { name: 'Anna', id: 369274901 }
    ]
  }

  init = () => {
    this.launch();
    this.command('start', (ctx) => {

      ctx.reply("Выбар", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Стварыць гульню", callback_data: "data1"},
              { text: "Увайсцi ў гульню", callback_data: "data2"}
            ]
          ]
        }
      })

      // console.log(ctx.update)
      // console.log(ctx.update.message.from.id)
      // this.players.push({
      //   name: ctx.update.message.from.first_name,
      //   id: ctx.update.message.from.id,
      //   chat: ctx.update.message.chat.id
      // })
      // console.log(this.players)
      // this.players.forEach(player => {
      //   console.log(player)
      //   ctx.sendMessage(`${ctx.update.message.from.first_name} in da house`, {chat_id: player.id})
      // })
      // console.log(this)
      
      // ctx.reply(String(ctx));
      // this.request(ctx)
      // this.intervalId = setTimeout(() => {this.request(ctx)}, 1000)
    })
    // this.command('stop', (ctx) => {
    //   if (this.started) {
    //     clearInterval(this.intervalId)
    //     ctx.reply('Вы отписались')
    //   } else {
    //     ctx.reply('Вы и так не были подписаны')
    //   }
    // })
  }

  addMethods = () => {
    this.command('start', start)  
  }
}

// export const initBot = () => {
//   const bot = new Bot(TELEGRAM_TOKEN, {
//     handlerTimeout: Infinity
//   })
//   bot.init();
//   return bot;
// }

export default Bot

