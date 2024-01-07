import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjMSV5pNnFFi0ZLgocxWSY27D4HR8ARYw",
  authDomain: "calculate-expenses-2b3bf.firebaseapp.com",
  projectId: "calculate-expenses-2b3bf",
  storageBucket: "calculate-expenses-2b3bf.appspot.com",
  messagingSenderId: "230140456334",
  appId: "1:230140456334:web:2154fc234e5e0f77c548df",
  measurementId: "G-N7HC4T19KR",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
