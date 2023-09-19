// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4TIvP1jBObtZQihRZrpkfRe3LeeNzLQ",
  authDomain: "foodlive-716c3.firebaseapp.com",
  projectId: "foodlive-716c3",
  storageBucket: "foodlive-716c3.appspot.com",
  messagingSenderId: "598409073580",
  appId: "1:598409073580:web:f95623357639a0c4f5e009",
  measurementId: "G-1KZY09WPGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);