import { Telegraf } from "telegraf";
// import axios from "axios"
// import { ENDPOINT, getEndpoint } from "./config/urls";
// import axios from "node_modules/axios/index";
class Bot extends Telegraf {
    // constructor(TOKEN, options, {server}) {
    constructor(TOKEN, options) {
        super(TOKEN, options);
        // getUser = (context) => ({id: String(context.update.message.from.id), name: context.update.message.from.first_name})
        Object.defineProperty(this, "init", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.launch();
                this.applyMethods();
            }
        });
        Object.defineProperty(this, "applyMethods", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.command('start', this.startCommand);
            }
        });
        Object.defineProperty(this, "startCommand", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (ctx) => {
                ctx.reply('ns gbplh');
                // axios.post(getEndpoint(ENDPOINT.REGISTER), this.getUser(ctx)).then(response => {
                //   console.log(response.data)
                //   ctx.reply(`id: ${response.data.id}`)
                //   ctx.reply(`name: ${response.data.name}`)
                //   // return response.json()
                // }).then(result => {
                //   // console.log(result)
                // })
            }
        });
        // this.server = server;
    }
}
export default Bot;
