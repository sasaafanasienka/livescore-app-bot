import express from 'express'
import { initFirebase } from '../firebase/firebase.js';

class Server {
  constructor() {
    this.base = initFirebase();
    this.app = express();
    this.port = 3000   
  }

  init = () => {
    this.app.get('/', async (req, res) => {
      const usersList = await this.base.getUsersList()
      console.log(usersList);
      res.send('Hello world')
    })

    this.app.post('/register', async (req, res) => {
      console.log('body zalua', req.body)
      // const result = await this.base.register(req.body)
      // console.log(result)
      // console.log(res)
    })

    this.app.post('/addgame', async (req, res) => {
      const result = await this.base.addGame(req)
      console.log(result)
    })

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server;
