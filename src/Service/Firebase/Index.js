
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgjtz7GYRotY2gv-iJVEBWunhV9dHxRiA",
  authDomain: "coder-react-d4d66.firebaseapp.com",
  projectId: "coder-react-d4d66",
  storageBucket: "coder-react-d4d66.appspot.com",
  messagingSenderId: "40354252248",
  appId: "1:40354252248:web:88b914db5339d90a32dead"
};


const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)