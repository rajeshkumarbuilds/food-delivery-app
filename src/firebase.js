import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkWWUJCisBOIgTzz13f4bW2_NdG437swI",
  authDomain: "food-delivery-78eae.firebaseapp.com",
  projectId: "food-delivery-78eae",
  storageBucket: "food-delivery-78eae.firebasestorage.app",
  messagingSenderId: "519255100703",
  appId: "1:519255100703:web:30ddb8b445c2c765c3f42a",
  measurementId: "G-BEFHTHVZ1N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);