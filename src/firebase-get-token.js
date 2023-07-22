import firebase from "firebase/app";
import "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAyeJyirLMiGpDn8VYDse31NsOumQAbZjM",
  authDomain: "dtalks-41451.firebaseapp.com",
  projectId: "dtalks-41451",
  storageBucket: "dtalks-41451.appspot.com",
  messagingSenderId: "681796334883",
  appId: "1:681796334883:web:a4c1c6947ef78610cb8896",
  measurementId: "G-WYBMK9HYCV",
};

// export const app = initializeApp(firebaseConfig);
// const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
// export const messaging = getMessaging(app);

	firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

// getToken(messaging, {
//   vapidKey: "BPKLNiWeZ6w0NazJhQdIwghjrGbt52m65mtrY2d73Rg0Yt8FItDlt9_fdC3s4Ew6drHSWqUIYX2MK-Qku-V36Hg",
// })
//   .then((currentToken) => {
//     if (currentToken) {
//       // Send the token to your server and update the UI if necessary
//       // ...
//       console.log("get token: ", currentToken);
//     } else {
//       // Show permission request UI
//       console.log("No registration token available. Request permission to generate one.");
//       // ...
//     }
//   })
//   .catch((err) => {
//     console.log("An error occurred while retrieving token. ", err);
//     // ...
//   });

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       // Initialize Firebase
//     } else {
//       console.log("fail get token");
//     }
//   });
// }

// requestPermission();
