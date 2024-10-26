import { Telegraf } from 'telegraf';
import { BOT_TOKEN, MESSAGES } from './config.js';
import { dateFormat, getApiUrl, getDate } from './utils.js';

const bot = new Telegraf(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply(MESSAGES.START);
}); 

const fetchLive = (ctx) => {
  fetch(getApiUrl('', { action: 'get_events', 'match_live': '1', 'country_id':44 })).then((response) => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();   
  }).then((data) => {
    if (data.message) {
      ctx.reply(data.message)
    }
    if (Array.isArray(data)) {
      const answer = data.map((item) => {
        const homeName = item.match_hometeam_name
        const awayName = item.match_awayteam_name
        const latestGoal = item.goalscorer.at(-1)
        const score = latestGoal?.score ?? '0 - 0'
        const status = item.match_status ?? ''

        const latestGoalTime = latestGoal.time ?? 0
        const scorer = latestGoal.home_scorer ?? latestGoal.away_scorer
        const assist = latestGoal.home_assist ?? latestGoal.away_assist
        const scorerInfo = `${latestGoalTime}' ${scorer} ${assist ? `( ${assist} )` : ''}`

        return `${status}\n${homeName} ${score} ${awayName}\n${scorerInfo}`
      }).join('\n\n')
      ctx.reply(answer)
    }
  }).catch((error) => {
    console.error(error);
    ctx.reply('Ошибка при получении данных')
  });
}

bot.command('live', (ctx) => {
  console.log(ctx)
  fetchLive(ctx);
});

bot.command('countries', (ctx) => {
  fetch(getApiUrl('', { action: 'get_leagues' })).then((response) => {
    return response.json();
  }).then((data) => { 
    console.log(data)
  })
})

// bot.command('fixtures', (ctx) => {
//   fetch(getApiUrl(`/fixtures/between/${getDate()}/${getDate({ daysFromNow: 7 })}`)).then((response) => {
//     if (!response.ok) throw new Error(response.statusText);
//     return response.json();   
//   }).then((data) => {
//     if (data.message) {
//       ctx.reply(data.message)
//     }
//     if (Array.isArray(data.data)) {
//       const answer = data.data.map((item) => {
//         return `${dateFormat(item.starting_at_timestamp)}\n${item.name.replace(' vs ', ' - ')}\n${item.result_info}`
//       }).join('\n\n')
//       ctx.reply(answer)
//     }
//   }).catch((error) => {
//     console.error(error);
//     ctx.reply('Ошибка при получении данных')
//   });});

export default bot;