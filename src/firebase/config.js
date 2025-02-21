import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFYlF1-gnK8fFLkDZ7WxOdehG7aeuQqY",
  authDomain: "proyecto-web-ii-22.firebaseapp.com",
  projectId: "proyecto-web-ii-22",
  storageBucket: "proyecto-web-ii-22.firebasestorage.app",
  messagingSenderId: "966109450051",
  appId: "1:966109450051:web:32215ff6e5e2bfd26869f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)