import { Telegraf, Markup } from "telegraf";
import { TELEGRAM_TOKEN, API_TOKEN } from "../../config/tokens.js";
import { message } from 'telegraf/filters'
import { start } from "./commands/start.js";
import { getCompetition } from "./actions/get-competition.js";

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



// bot.on(message('text'), ctx => {
//   fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${API_TOKEN}`).then(res => res.json()).then(result => {
//     const keyboard = Markup.inlineKeyboard(
//       result.map(country => {
//         return [Markup.button.callback(country.country_name, `GET_COMPETITIONS:${country.country_id}`)]
//       })
//     );
//     ctx.reply('Выбери страну', keyboard);
//   })
// })

// bot.action(/GET_COMPETITIONS:(.+)/, (ctx) => {
//   const country_id = ctx.match[1] 

//   fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=${API_TOKEN}`).then(res => res.json()).then(result => {
    
//     const keyboard = Markup.inlineKeyboard(
//       result.map(competition => {
//         return [Markup.button.callback(competition.league_name, `GET_TEAMS:${competition.league_id}`)]
//       })
//     );
//     ctx.reply('Выбери соревнование', keyboard);
//   })
// });

// bot.action(/GET_TEAMS:(.+)/, (ctx) => {
//   const league_id = ctx.match[1] 

//   fetch(`https://apiv3.apifootball.com/?action=get_teams&league_id=${league_id}&APIkey=${API_TOKEN}`).then(res => res.json()).then(result => {

//     const teams = result.map(team => [team.team_name])
    
//     const keyboard = Markup.inlineKeyboard(
//       result.map(team => {
//         return [Markup.button.callback(team.team_name, `GET_TEAM:${team.team_key}`)]
//       })
//     );
//     ctx.reply('Выбери команду', keyboard);
//   })
// });

// bot.action(/GET_TEAM:(.+)/, (ctx) => {
//   const team_id = ctx.match[1] 
//   const user_id = ctx.update.callback_query.from.id


//   fetch(`https://apiv3.apifootball.com/?action=get_teams&team_id=${team_id}&APIkey=${API_TOKEN}`).then(res => res.json()).then(result => {
    
//     User.findOne({ telegram_id: user_id }).then((user) => {
//       if (user) {
//         // Пользователь найден, проверить наличие подписки
//         const buttonText = user.subscriptions.includes(team_id) ? 'Unsubscribe' : 'Subscribe';
//         const keyboard = Markup.inlineKeyboard(
//           [
//             [Markup.button.callback(buttonText, `SUBSCRIBE:${result[0].team_key}`)]
//           ]
//         );
//         ctx.replyWithPhoto(result[0].team_badge)
//         ctx.reply(result[0].team_name, keyboard);
//       }
//     })
//   })
// });

// bot.action(/SUBSCRIBE:(.+)/, async (ctx) => {
//   const user_id = ctx.update.callback_query.from.id
//   const team_id = ctx.match[1]
// })
