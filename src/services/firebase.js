import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDckgWOsIXhWuKP3ywqHKpCSPZj9PtVu_s",
  authDomain: "loginse-5c3bd.firebaseapp.com",
  databaseURL: "https://loginse-5c3bd.firebaseio.com",
  projectId: "loginse-5c3bd",
  storageBucket: "loginse-5c3bd.appspot.com",
  messagingSenderId: "862840352206",
  appId: "1:862840352206:web:11e045dfafbf599bb3cf9f",
  measurementId: "G-X9HR5E03ZZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
