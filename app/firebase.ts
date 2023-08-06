// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache, } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpPShHEkb757T4eLtVBotK8ArNNh6t1lw",
  authDomain: "aquakittracker.firebaseapp.com",
  projectId: "aquakittracker",
  storageBucket: "aquakittracker.appspot.com",
  messagingSenderId: "489636109650",
  appId: "1:489636109650:web:99078e2754a9ae9090ee8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeFirestore(app, {localCache: persistentLocalCache(/*settings*/{})});


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);


