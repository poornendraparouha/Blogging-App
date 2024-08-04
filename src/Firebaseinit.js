// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNWb92-oDkN4FXE4G7-T0b7ptytSJGhOU",
  authDomain: "blogging-app-cd674.firebaseapp.com",
  projectId: "blogging-app-cd674",
  storageBucket: "blogging-app-cd674.appspot.com",
  messagingSenderId: "187811088126",
  appId: "1:187811088126:web:e22e203ea24ae965e307af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);