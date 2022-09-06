import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8i1cWi_fbgMhu5g6DigLX3VTNZSyVj9c",
  authDomain: "fridgefy-951bb.firebaseapp.com",
  projectId: "fridgefy-951bb",
  storageBucket: "fridgefy-951bb.appspot.com",
  messagingSenderId: "797703747454",
  appId: "1:797703747454:web:2b352825fb8786ae87652f"
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
