import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdc8vtt7L9AoRWoCYxuXgVIL_Ez3pDP2k",
  authDomain: "dunes--clone-reactjs.firebaseapp.com",
  projectId: "dunes--clone-reactjs",
  storageBucket: "dunes--clone-reactjs.appspot.com",
  messagingSenderId: "534577223563",
  appId: "1:534577223563:web:18393aa278fc6b2ca8818e",
  measurementId: "G-X1NF2DFL4G",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
