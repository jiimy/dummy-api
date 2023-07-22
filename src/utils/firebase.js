import firebase from "firebase/app";

export default async function getToken() {
  const messaging = firebase.messaging();
  const token = await messaging.getToken({
    vapidKey: "BOWbgLD10kyQ6zwV8RpnBg84oLQCD6Ll1t2u0AWjDxd1-u3sbTNy1DbKHEvJpvgLrUAhinaytkHIDakxn0HETaI",
  });

  return token;
}
