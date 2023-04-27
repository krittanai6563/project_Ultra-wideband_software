
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'



const firebaseConfig = {
  apiKey: "AIzaSyCTPYTH7w9aGehFZymLW-UBCyVy23V4OOU",
  authDomain: "puwb-346e7.firebaseapp.com",
  projectId: "puwb-346e7",
  storageBucket: "puwb-346e7.appspot.com",
  messagingSenderId: "549308292223",
  appId: "1:549308292223:web:6bbc3866afd4c36168f34a",
  measurementId: "G-PTNFEM0YD4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// export const dbAnchor1 = db.ref("esp32/json/Anchor1")
// export const dbAnchor2 = db.ref("esp32/json/Anchor2")
// export const dbAnchor3 = db.ref("esp32/json/Anchor3")

// export const User = db.ref("user")

export default firebase;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCTPYTH7w9aGehFZymLW-UBCyVy23V4OOU",
//   authDomain: "puwb-346e7.firebaseapp.com",
//   projectId: "puwb-346e7",
//   storageBucket: "puwb-346e7.appspot.com",
//   messagingSenderId: "549308292223",
//   appId: "1:549308292223:web:6bbc3866afd4c36168f34a",
//   measurementId: "G-PTNFEM0YD4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);