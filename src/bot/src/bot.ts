import { Context, Telegraf } from "telegraf";
// import axios from "axios"
// import { ENDPOINT, getEndpoint } from "./config/urls";

// import axios from "node_modules/axios/index";

class Bot extends Telegraf {
  // constructor(TOKEN, options, {server}) {
  constructor(TOKEN: string, options: any) {
    super(TOKEN, options);
    // this.server = server;
  }

  // getUser = (context) => ({id: String(context.update.message.from.id), name: context.update.message.from.first_name})

  init = () => {
    this.launch();
    this.applyMethods();   
  }

  applyMethods = () => {
    this.command('start', this.startCommand)
  }

  startCommand = (ctx: Context) => {
    ctx.reply('ns gbplh')
    // axios.post(getEndpoint(ENDPOINT.REGISTER), this.getUser(ctx)).then(response => {
    //   console.log(response.data)
    //   ctx.reply(`id: ${response.data.id}`)
    //   ctx.reply(`name: ${response.data.name}`)
    //   // return response.json()
    // }).then(result => {
    //   // console.log(result)
    // })
  }

  // addGame = (ctx) => {
  //   fetch(getEndpoint(ENDPOINT.ADD_GAME), {
  //     method: 'POST', data: {
  //     user: this.getUser(ctx)
  //     }
  //   }).then(res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //     throw Error
  //   }).then(result => {
  //     console.log(result)
  //   })
  // }

}

export default Bot

