import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB92Q_ZX-sHjSS6n5Np9zE9QJaR3O56E9Y",
  authDomain: "dev-mobile-ac2-be2fe.firebaseapp.com",
  projectId: "dev-mobile-ac2-be2fe",
  storageBucket: "dev-mobile-ac2-be2fe.appspot.com",
  messagingSenderId: "1012078142619",
  appId: "1:1012078142619:web:24d8931a8dc013af0a923e",
  measurementId: "G-L8KBPR9WY9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;