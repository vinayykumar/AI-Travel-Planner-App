// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZQ_j7Ug7itJ329ZBrfIxiiDoNZnk7sIQ",
  authDomain: "routerover-b1d90.firebaseapp.com",
  projectId: "routerover-b1d90",
  storageBucket: "routerover-b1d90.appspot.com",
  messagingSenderId: "652231893321",
  appId: "1:652231893321:web:41ee3aeb9e16664331ba98",
  measurementId: "G-X3MTYWTL0X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);