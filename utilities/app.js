// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  query,
  getDocs,
  deleteDoc,
  serverTimestamp,
  orderBy,
  where    
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  ref,
  getStorage,
  getDownloadURL,
  uploadBytes
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDj8j5LrNG26xhoPtzfF7wzQur5_P7Gd0",
    authDomain: "food-delivery-c5df1.firebaseapp.com",
    projectId: "food-delivery-c5df1",
    storageBucket: "food-delivery-c5df1.appspot.com",
    messagingSenderId: "540610821340",
    appId: "1:540610821340:web:d8e0e61860b7b3e9620819"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  deleteDoc,
  ref,
  storage,
  getDownloadURL,
  uploadBytes,
  serverTimestamp,
  orderBy,
  where
    
};


