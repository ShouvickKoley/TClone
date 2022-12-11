// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfWH5idkWCIP95b4tcZlOe6WZVHjQocbw",
  authDomain: "zwitter-v1-aca1e.firebaseapp.com",
  projectId: "zwitter-v1-aca1e",
  storageBucket: "zwitter-v1-aca1e.appspot.com",
  messagingSenderId: "116213519346",
  appId: "1:116213519346:web:aea133f142c9bb57fcd16b",
  measurementId: "G-7WDCFX48H0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);
export {app, db, storage}
