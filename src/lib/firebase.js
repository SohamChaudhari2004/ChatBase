
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_-i71tAWH1oEtVZ4axwtDzf5omjZo96Q" ,
  authDomain: "chatbase-react.firebaseapp.com",
  projectId: "chatbase-react",
  storageBucket: "chatbase-react.appspot.com",
  messagingSenderId: "452276314520",
  appId: "1:452276314520:web:8ef7585c5f7ba9e6b14bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()