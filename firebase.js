// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA00LjlUcyLut9fX6cl7Q4fSYwwSlYMzX4",
  authDomain: "login-7e856.firebaseapp.com",
  projectId: "login-7e856",
  storageBucket: "login-7e856.appspot.com",
  messagingSenderId: "824486372819",
  appId: "1:824486372819:web:9a59138276b40ddd827b26"
};

// Initialize Firebase
if(!firebase.apps.length)
{{
  firebase.initializeApp(firebaseConfig);
}}
const auth =firebase.auth()

export  {auth}