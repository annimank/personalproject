// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import getFirestore function
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDf52tGlb_u9-d5AYa_pZ4G8Ycbfh9fQ",
  authDomain: "personalproject-10fb3.firebaseapp.com",
  projectId: "personalproject-10fb3",
  storageBucket: "personalproject-10fb3.appspot.com",
  messagingSenderId: "365012614935",
  appId: "1:365012614935:web:615059687e5648ffe2c152",
  measurementId: "G-GETW9WCHJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firestore instance and getFirestore function
const firestore = getFirestore();
export { firestore, getFirestore }; // Export both the firestore object and the getFirestore function