import { Telegraf } from "telegraf";

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
      fetch('http://localhost:3000/').then(response => {
        return response;
      }).then(result => {
        ctx.reply(String(result), {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Стварыць гульню", callback_data: "data1"},
                { text: "Увайсцi ў гульню", callback_data: "data2"}
              ]
            ]
          }
        })
      })
    })
  }

  addMethods = () => {
    this.command('start', start)  
  }
}

export default Bot

