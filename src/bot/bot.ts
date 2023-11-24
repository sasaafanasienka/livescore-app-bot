import {Telegraf, Context} from 'telegraf';
// import axios from 'axios';
import {Update, Message} from '@telegraf/types';
import { ENDPOINT, getEndpoint } from './config/urls';
// import { ENDPOINT, getEndpoint } from './config/urls';
// import {ENDPOINT, getEndpoint} from '@botconfig/urls';
// ENDPOINT

class Bot extends Telegraf {
  constructor(TOKEN: string, options: any) {
    super(TOKEN, options);
    // this.token = TOKEN
    // this.options = options

  }


    getUser = ({from}: Message) => ({id: String(from?.id) ?? '', name: from?.first_name ?? ''})

  init = () => {
    // console.log(this)
    this.applyMethods();
    this.launch();
  }

  applyMethods = () => {
    this.command('start', this.startCommand)
  }

  startCommand = (ctx: Context<Update>) => {
    const user = ctx.message ? this.getUser(ctx.message) : undefined
    // ctx.reply(user ? String(user) : 'you are pidor' )
    console.log(user)
    //     reply(`id`)
    //     reply(`name`)
    if (user) {
      console.log(getEndpoint(ENDPOINT.REGISTER))
      fetch(getEndpoint(ENDPOINT.REGISTER), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      })
      .then(response => {
        return response.json()
      })
      .then(json => console.log(json))
    }
    // if (user) {
    //   axios.post(getEndpoint(ENDPOINT.REGISTER), user).then(response => {
    //     console.log(response.data)
    //     ctx.reply(`id: ${response.data.id}`)
    //     ctx.reply(`name: ${response.data.name}`)
    //     // return response.json()
    //   }).then(result => {
    //     console.log(result)
    //   })
    // } 
  }

}

export default Bot