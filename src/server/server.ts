import express, {Express} from 'express'
import { initFirebase, Firebase } from '../firebase/firebase';
import bodyParser from 'body-parser'

class Server {

  base: Firebase
  app: Express;
  port: number;

  constructor() {
    this.base = initFirebase();
    this.app = express();
    this.port = 3000;
  }

  init = () => {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.get('/', async (_, res) => {
      const usersList = await this.base.getUsersList()
      console.log(usersList);
      res.send('Hello world')
    })

    this.app.post('/register', async (req, res) => {
      const result = await this.base.register(req.body)
      if (result === true) {
        res.status(200).send(true)
      } else {
        res.status(500).send(true)
      }
    })

    // this.app.post('/addgame', async (req, res) => {
    //   const result = await this.base.addGame(req)
    //   console.log(result)
    // })

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server;
