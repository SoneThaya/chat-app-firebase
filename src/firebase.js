import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVbBLb544YaUgCaWK7f6RJFvR6HfIIGXc",
  authDomain: "chat-app-yt-22cc9.firebaseapp.com",
  projectId: "chat-app-yt-22cc9",
  storageBucket: "chat-app-yt-22cc9.appspot.com",
  messagingSenderId: "348247087307",
  appId: "1:348247087307:web:e0771b9995d73292e6a34e",
  measurementId: "G-HNXTBNR5JZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

//const analytics = getAnalytics(app);
