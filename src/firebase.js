import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCKK4VhXouMbaKDm7ewju3Oi1CNIOh1bM",
  authDomain: "clone-yt-b22d7.firebaseapp.com",
  projectId: "clone-yt-b22d7",
  storageBucket: "clone-yt-b22d7.appspot.com",
  messagingSenderId: "669841816514",
  appId: "1:669841816514:web:c749279566423b638b745b",
  measurementId: "G-8X0E10TWZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
