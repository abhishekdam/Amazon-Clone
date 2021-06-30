import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPDEoILmO7PHPmsQa00fpT0fpwOJfrixM",
  authDomain: "clone-7a298.firebaseapp.com",
  databaseURL: "https://clone-7a298-default-rtdb.firebaseio.com",
  projectId: "clone-7a298",
  storageBucket: "clone-7a298.appspot.com",
  messagingSenderId: "655739720733",
  appId: "1:655739720733:web:bbc534e2059aa8e7c662f4",
  measurementId: "G-XSVSKTMGZP",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
