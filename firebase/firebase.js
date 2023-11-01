import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

  }

  getUsersList = async () => {
    const users = collection(this.db, 'users')
    const usersSnapshot = await getDocs(users)
    const usersList = usersSnapshot.docs.map(doc => doc.data())
    return usersList
  }
}

export const initFirebase = () => {
  const firebase = new Firebase();
  firebase.init();
  return firebase
}