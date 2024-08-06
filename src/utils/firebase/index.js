import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2IHiMPXE-gkKx1PJJj2QNKeGHjKcetM",
  authDomain: "ai-trip-generator.firebaseapp.com",
  projectId: "ai-trip-generator",
  storageBucket: "ai-trip-generator.appspot.com",
  messagingSenderId: "585071168816",
  appId: "1:585071168816:web:a92e7d2716ad2b35638cf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db };
export default auth;
