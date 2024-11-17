// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  // apiKey: "AIzaSyDpTDNQX_OSLd5ejZsEh7SPqPp50wqlOnI",
  // authDomain: "dragon-news-f20de.firebaseapp.com",
  // projectId: "dragon-news-f20de",
  // storageBucket: "dragon-news-f20de.firebasestorage.app",
  // messagingSenderId: "163158446567",
  // appId: "1:163158446567:web:212627b508cfb19c1dad42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



