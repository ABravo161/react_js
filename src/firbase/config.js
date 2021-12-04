// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXeVmnfgHsO7AcRjvpDQYP9U99ebge7dw",
  authDomain: "curso-reactjs-a1224.firebaseapp.com",
  projectId: "curso-reactjs-a1224",
  storageBucket: "curso-reactjs-a1224.appspot.com",
  messagingSenderId: "327695449316",
  appId: "1:327695449316:web:45d5c6c6fca61a7b6900f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)