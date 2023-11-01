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

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server;
