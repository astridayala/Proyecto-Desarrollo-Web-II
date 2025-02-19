import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMFYlF1-gnK8fFLkDZ7WxOdehG7aeuQqY",
    authDomain: "proyecto-web-ii-22.firebaseapp.com",
    projectId: "proyecto-web-ii-22",
    storageBucket: "proyecto-web-ii-22.firebasestorage.app",
    messagingSenderId: "966109450051",
    appId: "1:966109450051:web:32215ff6e5e2bfd26869f6"
};
  
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
