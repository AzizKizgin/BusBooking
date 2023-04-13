/** @format */
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBdV58yzvJ2npmdJQRBLMyfYW2UC5V9XXg",
  authDomain: "busbooking-49659.firebaseapp.com",
  projectId: "busbooking-49659",
  storageBucket: "busbooking-49659.appspot.com",
  messagingSenderId: "173937905199",
  appId: "1:173937905199:web:9e8790878bad641938c0da",
  measurementId: "G-LGZRNRCEX9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
