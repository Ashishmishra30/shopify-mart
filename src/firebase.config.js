// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDufDFBtwPleeiNUzb_66l8FIat7_70b_g",
  authDomain: "shopify-mart.firebaseapp.com",
  projectId: "shopify-mart",
  storageBucket: "shopify-mart.appspot.com",
  messagingSenderId: "292114993560",
  appId: "1:292114993560:web:deff5010b6901242d25bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;