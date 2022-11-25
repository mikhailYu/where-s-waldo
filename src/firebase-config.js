// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ITSOD3h65cpz89X_FmpHKngCGKm5h4M",
  authDomain: "pokemonfind-4b692.firebaseapp.com",
  projectId: "pokemonfind-4b692",
  storageBucket: "pokemonfind-4b692.appspot.com",
  messagingSenderId: "536592110411",
  appId: "1:536592110411:web:e27a460d66febc0fbe8ece",
  measurementId: "G-JELXPVWPJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
