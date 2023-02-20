// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2FgdPV3IM8muc2ay_fy3Q0IP2j7zZfdI",
  authDomain: "house-marketplace-app-de159.firebaseapp.com",
  projectId: "house-marketplace-app-de159",
  storageBucket: "house-marketplace-app-de159.appspot.com",
  messagingSenderId: "547263117098",
  appId: "1:547263117098:web:aa2e408861ff9814e85053"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()