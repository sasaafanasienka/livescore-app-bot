import { Context, Telegraf } from "telegraf";
import axios from "axios"
import { Message, Update } from "@telegraf/types";
import { ENDPOINT, getEndpoint } from "./config/urls";


class Bot extends Telegraf {
  // constructor(TOKEN, options, {server}) {
  constructor(TOKEN: string, options: any) {
    super(TOKEN, options);
    // this.server = server;
  }

  getUser = ({from}: Message) => ({id: String(from?.id) ?? '', name: from?.first_name ?? ''})

  init = () => {
    this.launch();
    this.applyMethods();    
  }

  applyMethods = () => {
    this.command('start', this.startCommand)
  }

  startCommand = ({message, reply}: Context<Update>) => {
    const user = message ? this.getUser(message) : undefined
    console.log(user)
    if (user) {
      axios.post(getEndpoint(ENDPOINT.REGISTER), user).then(response => {
        console.log(response.data)
        reply(`id: ${response.data.id}`)
        reply(`name: ${response.data.name}`)
        // return response.json()
      }).then(result => {
        console.log(result)
      })
    } 
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

