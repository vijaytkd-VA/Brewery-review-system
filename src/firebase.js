import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZUq6LIyaEGLjfVOcA3tOrZwLuZkJjmP8",
  authDomain: "review-system-c5274.firebaseapp.com",
  projectId: "review-system-c5274",
  storageBucket: "review-system-c5274.appspot.com",
  messagingSenderId: "251328795243",
  appId: "1:251328795243:web:d8f0ec59ce373f68ec172e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);