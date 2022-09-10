import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC36tWrIySq1m0OcWAziSSfPI7Tq9fFPE",
  authDomain: "alex-signals.firebaseapp.com",
  projectId: "alex-signals",
  storageBucket: "alex-signals.appspot.com",
  messagingSenderId: "662576775245",
  appId: "1:662576775245:web:a11bc5da66c2c1e5655c04",
  databaseURL:
    "https://alex-signals-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
