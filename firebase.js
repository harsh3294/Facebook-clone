import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC44W4Um0Q8X5h0BOilTK0oJk2XqhRjhGw",
  authDomain: "facebook-2-bf42f.firebaseapp.com",
  projectId: "facebook-2-bf42f",
  storageBucket: "facebook-2-bf42f.appspot.com",
  messagingSenderId: "254981098327",
  appId: "1:254981098327:web:35a2e637f09ddcb81c8c12",
  measurementId: "G-G5SJMBS215",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
