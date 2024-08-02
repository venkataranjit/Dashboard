import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnrwvjXZqCIaWmI3SCopRW6JiwGOGNAEQ",
  authDomain: "dashboard-f7e3e.firebaseapp.com",
  databaseURL: "https://dashboard-f7e3e-default-rtdb.firebaseio.com",
  projectId: "dashboard-f7e3e",
  storageBucket: "dashboard-f7e3e.appspot.com",
  messagingSenderId: "436428837414",
  appId: "1:436428837414:web:6f4480f7a93216ada68ce7",
  measurementId: "G-JJ6PTMZ5BV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);