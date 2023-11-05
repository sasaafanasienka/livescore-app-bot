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

  getUser = (context) => ({id: context.update.message.from.id, name: context.update.message.from.first_name})

  init = () => {
    this.launch();
    this.command('start', (ctx) => {
      fetch('http://localhost:3000/register', {
        method: 'POST', headers: {
          'Content-Type': 'application/json', // Устанавливаем заголовок для JSON данных
        }, body: 'gfdgfd'
      }).then(response => {
        return response;
      }).then(result => { 
        const inlineKeyboard = Markup.inlineKeyboard([
          Markup.button.callback('New game', 'addGame'),
          Markup.button.callback('Join by id', 'joinById'),
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
      fetch('http://localhost:3000/addgame', {
        method: 'POST', data: {
        user: this.getUserId(ctx)
        }
      }).then(res => {
        if (res.ok) {
          return res.json()
        }
        throw Error
      }).then(result => {
        console.log(result)
      })
    })  
  }
}

export default Bot

