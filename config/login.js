import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getAuth} from "firebase/auth"
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDaWHs0lqIPvdN5lNWiELGaixpQcNs_xT0",
  authDomain: "cooks-26916.firebaseapp.com",
  projectId: "cooks-26916",
  storageBucket: "cooks-26916.appspot.com",
  messagingSenderId: "968547215745",
  appId: "1:968547215745:web:1da40d971e3a22bdb76080",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth
