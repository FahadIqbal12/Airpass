// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpAKpE1dxqAzzzQHj3FvVflrzGas9VhiQ",
  authDomain: "travelpal-805be.firebaseapp.com",
  projectId: "travelpal-805be",
  storageBucket: "travelpal-805be.appspot.com",
  messagingSenderId: "781171865304",
  appId: "1:781171865304:web:5a88510d98d6da4d4589ad",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app) 

export {db}