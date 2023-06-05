import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZEEP9jp3Grb055LOeWbaGIdDMpwXWCQc",
  authDomain: "website-ec677.firebaseapp.com",
  databaseURL: "https://website-ec677-default-rtdb.firebaseio.com",
  projectId: "website-ec677",
  storageBucket: "website-ec677.appspot.com",
  messagingSenderId: "669003680813",
  appId: "1:669003680813:web:2f271de5bdc1b3a1dffca4",
  measurementId: "G-RJDH8BMMR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const Backend = function () {
  return null;
};

export { firestore };
export default Backend;
