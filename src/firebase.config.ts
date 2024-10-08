// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBF-aOkTfi8ksQIR9wTMX2r_Gk4hME2ea4",
  authDomain: "gawali-app.firebaseapp.com",
  projectId: "gawali-app",
  storageBucket: "gawali-app.appspot.com",
  messagingSenderId: "380406086856",
  appId: "1:380406086856:web:6cbd8e6d33e3ffa0d839fd",
  measurementId: "G-TFJ3M5QZ5G"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);