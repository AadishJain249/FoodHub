import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA8EfTJHc2QHAW_DYX8LcL8Y_jmngraS68",
  authDomain: "foodhub-8c90a.firebaseapp.com",
  projectId: "foodhub-8c90a",
  storageBucket: "foodhub-8c90a.appspot.com",
  messagingSenderId: "277998440702",
  appId: "1:277998440702:web:bc0f7d70ce69f28af555af",
  measurementId: "G-KV6LCQC316"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);