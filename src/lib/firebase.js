import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firbaseConfig = {
  apiKey: "AIzaSyA6lpZOwCf_QqJ7WqtRZNSydhEpYzUwE74",
  authDomain: "instagram-3e90d.firebaseapp.com",
  projectId: "instagram-3e90d",
  storageBucket: "instagram-3e90d.appspot.com",
  messagingSenderId: "23414771775",
  appId: "1:23414771775:web:b1125a830f996efe5d288a",
};

const app = !getApps().length ? initializeApp(firbaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
export { app, db, auth, storage };
