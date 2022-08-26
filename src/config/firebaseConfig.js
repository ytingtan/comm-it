// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyBh9kN28Figggy64GcT443HAUzEOkZgxXg",
  
    authDomain: "comm-it-e8b96.firebaseapp.com",
  
    projectId: "comm-it-e8b96",
  
    storageBucket: "comm-it-e8b96.appspot.com",
  
    messagingSenderId: "396446490176",
  
    appId: "1:396446490176:web:85c3f3dbae9e27e98809a5",
  
    measurementId: "G-7QHJK5G2CX"
  
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }