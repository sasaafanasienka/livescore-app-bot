var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, getDoc } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyCAEkZQB0QTi6Ytd5NDgqCCxY29DnEBS4Q",
    authDomain: "cows-game.firebaseapp.com",
    projectId: "cows-game",
    storageBucket: "cows-game.appspot.com",
    messagingSenderId: "406665087622",
    appId: "1:406665087622:web:9d836bb1baa8f6cf5e1f07"
};
class Firebase {
    constructor() {
        Object.defineProperty(this, "init", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.db = getFirestore(this.app);
            }
        });
        Object.defineProperty(this, "getUsersList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                const users = collection(this.db, 'users');
                const usersSnapshot = yield getDocs(users);
                const usersList = usersSnapshot.docs.map(doc => doc.data());
                return usersList;
            })
        });
        Object.defineProperty(this, "register", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ id, name }) => __awaiter(this, void 0, void 0, function* () {
                const users = collection(this.db, 'users');
                const userDocRef = doc(users, id);
                const userDocSnapshot = yield getDoc(userDocRef);
                if (userDocSnapshot.exists()) {
                    return true;
                }
                else {
                    const newUser = {
                        id: id,
                        name: name
                    };
                    yield setDoc(userDocRef, newUser);
                    return true;
                }
            })
        });
        Object.defineProperty(this, "addGame", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ user }) => __awaiter(this, void 0, void 0, function* () {
                const users = collection(this.db, 'games');
                const games = collection(this.db, 'games');
                const game = {
                    id: String(Math.floor(Math.random() * 1000000000))
                };
                addDoc(games, game).then((doc) => {
                    return doc;
                });
            })
        });
        this.app = initializeApp(firebaseConfig);
        this.db = undefined;
    }
}
export const initFirebase = () => {
    const firebase = new Firebase();
    firebase.init();
    return firebase;
};
