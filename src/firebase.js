// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b190.firebaseapp.com",
  projectId: "mern-estate-5b190",
  storageBucket: "mern-estate-5b190.firebasestorage.app",
  messagingSenderId: "2765225775",
  appId: "1:2765225775:web:2d1f17dfea990737a4ebda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);