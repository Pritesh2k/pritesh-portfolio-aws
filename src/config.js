// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpjMKpsgBLtsD-o3CNIz2PCtnfp9Osoz4",
  authDomain: "aws-portfolio-app.firebaseapp.com",
  projectId: "aws-portfolio-app",
  storageBucket: "aws-portfolio-app.appspot.com",
  messagingSenderId: "43493782861",
  appId: "1:43493782861:web:dfd122f12aa50e5b7af304",
  measurementId: "G-H3RZCC0WS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const videoDB = getStorage(app);