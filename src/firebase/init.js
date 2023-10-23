import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbMA1ESN_hP4bNH_CjG2bMXPgzy6P60OM",
  authDomain: "audio-bea.firebaseapp.com",
  projectId: "audio-bea",
  storageBucket: "audio-bea.appspot.com",
  messagingSenderId: "1068085943430",
  appId: "1:1068085943430:web:8a58c99562c74001bfc507",
  measurementId: "G-40LMTMFZ9H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;
