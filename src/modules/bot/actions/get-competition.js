import { API_TOKEN } from "../../../config/tokens.js";
import { Markup } from "telegraf";

export const getCompetition = (ctx) => {
  const country_id = ctx.match[1] 

  fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=${API_TOKEN}`).then(res => res.json()).then(result => {
    
    const keyboard = Markup.inlineKeyboard(
      result.map(competition => {
        return [Markup.button.callback(competition.league_name, `GET_TEAMS:${competition.league_id}`)]
      })
    );
    ctx.reply('Выбери соревнование', keyboard);
  })
}