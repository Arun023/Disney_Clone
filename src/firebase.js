import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDGiInBSERL0w6gC33e0fXXEYVXhNS06AU",
    authDomain: "disney-clone-fd373.firebaseapp.com",
    projectId: "disney-clone-fd373",
    storageBucket: "disney-clone-fd373.appspot.com",
    messagingSenderId: "396099494902",
    appId: "1:396099494902:web:62dc0f7f9f293a58fc1dd7",
    measurementId: "G-QCDGEKVSGY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, googleProvider, storage };
export default db;