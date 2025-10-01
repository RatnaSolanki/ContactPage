
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCqyHW0P0s7Iib5D5Jp0fJrJwgJxD0P_Do",
  authDomain: "contactpage-c3b91.firebaseapp.com",
  projectId: "contactpage-c3b91",
  storageBucket: "contactpage-c3b91.firebasestorage.app",
  messagingSenderId: "337851492343",
  appId: "1:337851492343:web:11f278f20dbc2a8d7730f2",
  measurementId: "G-W452H0L0LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db };

