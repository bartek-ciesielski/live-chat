import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAUDTSJuWTkgY4kcI580Be-fT6sKY7JU6E",
    authDomain: "live-chat-a6040.firebaseapp.com",
    projectId: "live-chat-a6040",
    storageBucket: "live-chat-a6040.appspot.com",
    messagingSenderId: "456318271244",
    appId: "1:456318271244:web:4fccc0c0669b3ad92ad329"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }