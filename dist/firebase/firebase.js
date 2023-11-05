import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore/lite';
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
        this.app = initializeApp(firebaseConfig);
        this.db = undefined;
    }
    init = () => {
        this.db = getFirestore(this.app);
    };
    getUsersList = async () => {
        const users = collection(this.db, 'users');
        const usersSnapshot = await getDocs(users);
        const usersList = usersSnapshot.docs.map(doc => doc.data());
        return usersList;
    };
    register = async ({ userId, userName }) => {
        const users = collection(this.db, 'users');
        const userDocRef = doc(users, userId);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            console.log('existst');
            return;
        }
        else {
            const newUser = {
                id: userId,
                name: userName
            };
            await setDoc(userDocRef, newUser);
            console.log('created');
        }
    };
    addGame = async ({ user }) => {
        const users = collection(this.db, 'games');
        const games = collection(this.db, 'games');
        const game = {
            id: String(Math.floor(Math.random() * 1000000000))
        };
        addDoc(games, game).then((doc) => {
            return doc;
        });
    };
}
export const initFirebase = () => {
    const firebase = new Firebase();
    firebase.init();
    return firebase;
};
