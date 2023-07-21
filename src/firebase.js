import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAL0D4x8PI-AAN6QeXbw2hN-arUoDDoK3g",
  authDomain: "fir-b6e66.firebaseapp.com",
  projectId: "fir-b6e66",
  storageBucket: "fir-b6e66.appspot.com",
  messagingSenderId: "991812439537",
  appId: "1:991812439537:web:2348f796b5c8b2d00d4850"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)