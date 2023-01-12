import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA8aODkdqNlqGmw4p_KL27XOG0WNrZDNYs",
    authDomain: "react-gb-48959.firebaseapp.com",
    projectId: "react-gb-48959",
    storageBucket: "react-gb-48959.appspot.com",
    messagingSenderId: "888599686627",
    appId: "1:888599686627:web:ab1149bafcc9efe9b444d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)