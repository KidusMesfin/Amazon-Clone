// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbwY3rGiBxiTcB1I4eaKdXaiR7_9GRgQE",
  authDomain: "clone-82c8d.firebaseapp.com",
  projectId: "clone-82c8d",
  storageBucket: "clone-82c8d.appspot.com",
  messagingSenderId: "1078724778052",
  appId: "1:1078724778052:web:b8af7b0b4e30c640598411"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };