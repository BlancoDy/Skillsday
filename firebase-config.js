// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKLbE_Ar-WOTPqY0raWkGXISPpArmbrsw",
  authDomain: "leaderboards-a22d2.firebaseapp.com",
  databaseURL: "https://leaderboards-a22d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leaderboards-a22d2",
  storageBucket: "leaderboards-a22d2.firebasestorage.app",
  messagingSenderId: "915600314569",
  appId: "1:915600314569:web:1b4c22aff1dac669ac3d18",
  measurementId: "G-GWS34CBX4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, update, onValue };
