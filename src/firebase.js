import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgZRAoQC7iSMaotwq03zxfGqu7QjOqrRU",
  authDomain: "linkedin-clone-7593a.firebaseapp.com",
  projectId: "linkedin-clone-7593a",
  storageBucket: "linkedin-clone-7593a.appspot.com",
  messagingSenderId: "337268073931",
  appId: "1:337268073931:web:e1c2bb23d981f41d93824e",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
