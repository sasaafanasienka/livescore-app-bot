var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { initFirebase } from '../firebase/firebase.js';
import bodyParser from 'body-parser';
class Server {
    constructor() {
        Object.defineProperty(this, "init", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.app.use(bodyParser.json());
                this.app.use(bodyParser.urlencoded({ extended: true }));
                this.app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    const usersList = yield this.base.getUsersList();
                    console.log(usersList);
                    res.send('Hello world');
                }));
                this.app.post('/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.base.register(req.body);
                    if (result === true) {
                        res.status(200).send();
                    }
                    else {
                        res.status(500).send();
                    }
                }));
                this.app.post('/addgame', (req, res) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.base.addGame(req);
                    console.log(result);
                }));
                this.app.listen(this.port, () => {
                    console.log(`Example app listening on port ${this.port}`);
                });
            }
        });
        this.base = initFirebase();
        this.app = express();
        this.port = 3000;
    }
}
export default Server;
