import { Telegraf, Markup } from "telegraf";
import { TELEGRAM_TOKEN, API_TOKEN } from "../../../config/tokens.js";
import { message } from 'telegraf/filters'
import { BASE_URL } from "../../../config/urls.js";

export const start = ctx => {

  // console.log(ctx)
  // console.log(ctx)
  const arr = ['Пизда', 'c говном']
  ctx.reply(arr[Math.random() - 0.5]);

  // fetch(`${BASE_URL}leagues?api_token=${API_TOKEN}`).then(res => res.json()).then(result => {
    // console.log(result)
    // const keyboard = Markup.inlineKeyboard(
    //   result.data.map(league => {
    //     return [Markup.button.callback(league.name, `GET_COMPETITIONS:${league.id}`)]
    //   })
    // );
    // ctx.reply('Выбери лигу', keyboard);
    // ctx.reply(result.message);
  // })
}