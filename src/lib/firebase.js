import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtk6H8sS1YUeGLz_gFjJ6kFpHZ4VcyomQ",
  authDomain: "reactchat-b633f.firebaseapp.com",
  projectId: "reactchat-b633f",
  storageBucket: "reactchat-b633f.appspot.com",
  messagingSenderId: "193610040695",
  appId: "1:193610040695:web:d963d5c356d24774c6cd72"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()