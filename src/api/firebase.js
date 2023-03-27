// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7DXkI7eSupoqF0b1HsqvD3Qcy7i7yv4w",
  authDomain: "crud-api-91530.firebaseapp.com",
  projectId: "crud-api-91530",
  storageBucket: "crud-api-91530.appspot.com",
  messagingSenderId: "993724101318",
  appId: "1:993724101318:web:1418ebb9aff269179c9dc7",
  measurementId: "G-DV18CTDJXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
