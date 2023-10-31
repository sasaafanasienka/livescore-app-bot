import express from 'express'

class Server {
  constructor() {
    this.app = express();
    this.port = 3000
  }

  init = () => {
    this.app.get('/', (req, res) => {
      res.send('Hello world')
    })

    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Server;