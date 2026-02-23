import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTHtqGNDU91q42C6eLQqaShDucweoY2ko",
  authDomain: "akshathapp-a26fa.firebaseapp.com",
  projectId: "akshathapp-a26fa",
  storageBucket: "akshathapp-a26fa.appspot.com",
  messagingSenderId: "345072231446",
  appId: "1:345072231446:web:e0f7474315e40063d84137",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
