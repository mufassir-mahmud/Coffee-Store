// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehYNeHJqIzQk6gaVmww46KY99KKX3AHc",
  authDomain: "coffees-store-app.firebaseapp.com",
  projectId: "coffees-store-app",
  storageBucket: "coffees-store-app.firebasestorage.app",
  messagingSenderId: "915677589721",
  appId: "1:915677589721:web:88341d48ff7da26e330ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

