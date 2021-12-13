// Your web app's Firebase configuration
//import { initializeApp } from "firebase/app"
import * as firebase from "firebase/app";
//import "firebase/firestore";
import { getFirestore } from "firebase/firestore"

//export const firebaseConfig = {
/* export const firebaseConfig = {  
  apiKey: "AIzaSyDOOz8BkUkyRU9pMI-o-HeX2_YDUnacTkc",
  authDomain: "ada-disruptia.firebaseapp.com",
  projectId: "ada-disruptia",
  storageBucket: "ada-disruptia.appspot.com",
  messagingSenderId: "754554505011",
  appId: "1:754554505011:web:26a554f800087df5e66046",
}; */
export const firebaseConfig = {
  apiKey: "AIzaSyAW-VolyefzDCRasmHhI1BPdT6I1WoKAAs",
  authDomain: "ada-v2.firebaseapp.com",
  projectId: "ada-v2",
  storageBucket: "ada-v2.appspot.com",
  messagingSenderId: "803611641485",
  appId: "1:803611641485:web:42a5e5f3a3c637433784c4",
};


//const app = initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const db = getFirestore();