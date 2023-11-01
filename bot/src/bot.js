import { Markup, Telegraf } from "telegraf";

class Bot extends Telegraf {
  constructor(TOKEN, options, {server}) {
    super(TOKEN, options);
    this.players = [
      { name: 'Sasha Afanasienka', id: 227431181 },
      { name: 'Anna', id: 369274901 }
    ];
    this.server = server;
  }

  init = () => {
    this.launch();
    this.command('start', (ctx) => {
      fetch('http://localhost:3000/').then(response => {
        return response;
      }).then(result => {
        const inlineKeyboard = Markup.inlineKeyboard([
          Markup.button.callback('Кнопка 1', 'addGame'),
          Markup.button.callback('Кнопка 2', 'button2'),
        ]);


        ctx.reply('Выберите действие:', inlineKeyboard);
      })
    })
    this.addMethods();
  }

  addGame = () => {
    console.log('addGame')
  }

  addMethods = () => {
    this.action('addGame', (ctx) => {
      console.log('dfsdfs')
    })  
  }
}

export default Bot

