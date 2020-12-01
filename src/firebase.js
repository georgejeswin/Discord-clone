import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbsef4uin6ze-AVv2s9FEZG6SqZNKMqKA",
  authDomain: "discord-clone-webapp.firebaseapp.com",
  databaseURL: "https://discord-clone-webapp.firebaseio.com",
  projectId: "discord-clone-webapp",
  storageBucket: "discord-clone-webapp.appspot.com",
  messagingSenderId: "430257212608",
  appId: "1:430257212608:web:0a059f08dc9cf8f7d1f125",
  measurementId: "G-TNJ1DGC08Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
