// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKUmACUMWKvbWHi2f9GLpswwiG2NJ-2JA",
  authDomain: "hotelbooking-b7cfd.firebaseapp.com",
  projectId: "hotelbooking-b7cfd",
  storageBucket: "hotelbooking-b7cfd.appspot.com",
  messagingSenderId: "975582513224",
  appId: "1:975582513224:web:e2306080eee28d60e4707d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export {
    storage
}