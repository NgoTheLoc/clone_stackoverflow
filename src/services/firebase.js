// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuX2MS9JhSrl9E6i4pqzmM9jhw4MND8f0",
  authDomain: "stackoverl.firebaseapp.com",
  projectId: "stackoverl",
  storageBucket: "stackoverl.appspot.com",
  messagingSenderId: "1078037225598",
  appId: "1:1078037225598:web:a64f12b28e54ebb550782f",
  measurementId: "G-W22GJWH2YC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
