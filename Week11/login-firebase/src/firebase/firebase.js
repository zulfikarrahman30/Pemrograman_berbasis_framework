import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA00COtb8MzmujFPfPgtL3OwPizeK6e3NU",
    authDomain: "loginfirebase-c4ba8.firebaseapp.com",
    projectId: "loginfirebase-c4ba8",
    storageBucket: "loginfirebase-c4ba8.appspot.com",
    messagingSenderId: "622501403236",
    appId: "1:622501403236:web:eecd3ef63d3d9b041ddd71"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;