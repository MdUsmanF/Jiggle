import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAqgNXGMsRy_YPg0XlpEa5mtCXllDp0gEQ",
    authDomain: "jiggle-c5ff0.firebaseapp.com",
    projectId: "jiggle-c5ff0",
    storageBucket: "jiggle-c5ff0.appspot.com",
    messagingSenderId: "15314486296",
    appId: "1:15314486296:web:08be06b46c934deeecef6d",
    measurementId: "G-J8GVD25TQH"
  }).auth();