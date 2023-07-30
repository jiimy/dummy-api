import { useEffect } from "react";
import * as firebaseApp from "firebase/app";
import * as firebaseMessage from "firebase/messaging";

export const VAPID_PUBLIC_KEY = "BOWbgLD10kyQ6zwV8RpnBg84oLQCD6Ll1t2u0AWjDxd1-u3sbTNy1DbKHEvJpvgLrUAhinaytkHIDakxn0HETaI";

export default function useGetToken() {

  useEffect(() => {
    firebaseApp.initializeApp({
      apiKey: "AIzaSyAyeJyirLMiGpDn8VYDse31NsOumQAbZjM",
      authDomain: "dtalks-41451.firebaseapp.com",
      projectId: "dtalks-41451",
      storageBucket: "dtalks-41451.appspot.com",
      messagingSenderId: "681796334883",
      appId: "1:681796334883:web:a4c1c6947ef78610cb8896",
      measurementId: "G-WYBMK9HYCV",
    });

    const messaging = firebaseMessage.getMessaging();

    firebaseMessage
      .getToken(messaging, {
        vapidKey: VAPID_PUBLIC_KEY,
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          alert("토큰: " + currentToken);
          // 토큰을 서버에 전달...
        } else {
          // Show permission request UI
          console.log("No registration token available. Request permission to generate one.");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);
}
