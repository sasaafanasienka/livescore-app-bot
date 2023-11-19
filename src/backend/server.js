import express from 'express'
import { initFirebase } from '../firebase/firebase.js';
import bodyParser from 'body-parser'

class Server {
  constructor() {
    this.base = initFirebase();
    this.app = express();
    this.port = 3000   
  }

  init = () => {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.get('/', async (req, res) => {
      const usersList = await this.base.getUsersList()
      console.log(usersList);
      res.send('Hello world')
    })

    this.app.post('/register', async (req, res) => {
      const result = await this.base.register(req.body)
      if (result === true) {
        res.status(200).send()
      } else {
        res.status(500).send()
      }
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
