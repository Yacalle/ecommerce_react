import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZg0TDKw-If0zLlyHdpEGlzW1QIB63sP0",
  authDomain: "ecommerce-with-react-64412.firebaseapp.com",
  projectId: "ecommerce-with-react-64412",
  storageBucket: "ecommerce-with-react-64412.appspot.com",
  messagingSenderId: "964610358244",
  appId: "1:964610358244:web:aaf83c8ea21a8f26daa5f1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
