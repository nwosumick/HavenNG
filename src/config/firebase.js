import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCQ-8gzuSnoy2wehEemya2HZxJJm-hs5a4",
  authDomain: "havenng-ffc51.firebaseapp.com",
  projectId: "havenng-ffc51",
  storageBucket: "havenng-ffc51.firebasestorage.app",
  messagingSenderId: "272785516901",
  appId: "1:272785516901:web:058515922ec64b491a198c",
  measurementId: "G-G2WZYHNDKH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);