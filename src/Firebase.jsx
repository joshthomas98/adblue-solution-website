// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZRSsiBJSHNeoYWYNbi27W-rkaKGz7TNo",
  authDomain: "adblue-solution-reviews.firebaseapp.com",
  databaseURL:
    "https://adblue-solution-reviews-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adblue-solution-reviews",
  storageBucket: "adblue-solution-reviews.appspot.com",
  messagingSenderId: "718547545625",
  appId: "1:718547545625:web:9b2659ece7d59aa9c44488",
  measurementId: "G-VSESTR9GDV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize Firebase Realtime Database

export { app, analytics, database };
