import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdfqajVe32DbShbNVMFOP22VkON6jlU7c",
  authDomain: "mystore-225f6.firebaseapp.com",
  projectId: "mystore-225f6",
  storageBucket: "mystore-225f6.appspot.com",
  messagingSenderId: "1080584552110",
  appId: "1:1080584552110:web:621b09cfff721ee93bf73f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
