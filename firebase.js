// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBx1yV_jcJ6i5_3v9Ajhrw_npWzb_gTSA",
  authDomain: "inventory-management-a6412.firebaseapp.com",
  projectId: "inventory-management-a6412",
  storageBucket: "inventory-management-a6412.appspot.com",
  messagingSenderId: "914216307693",
  appId: "1:914216307693:web:05518e4c82413889df75e4",
  measurementId: "G-L59GMPB6B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}