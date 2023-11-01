import { initializeApp } from "firebase/app";
import express from 'express'

const firebaseConfig = {
  apiKey: "AIzaSyCAEkZQB0QTi6Ytd5NDgqCCxY29DnEBS4Q",
  authDomain: "cows-game.firebaseapp.com",
  projectId: "cows-game",
  storageBucket: "cows-game.appspot.com",
  messagingSenderId: "406665087622",
  appId: "1:406665087622:web:9d836bb1baa8f6cf5e1f07"
};

class Server {
  constructor() {
    this.firebase = initializeApp(firebaseConfig);
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
