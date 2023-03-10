
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyC2l21YBFXUdqz61ukwaRXcEynt7t32C30",
  authDomain: "projectuwb-27b59.firebaseapp.com",
  databaseURL: "https://projectuwb-27b59-default-rtdb.firebaseio.com",
  projectId: "projectuwb-27b59",
  storageBucket: "projectuwb-27b59.appspot.com",
  messagingSenderId: "436204132556",
  appId: "1:436204132556:web:045ca6a919b9f886454a69",
  measurementId: "G-574YC9RVV3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// export const dbAnchor1 = db.ref("esp32/json/Anchor1")
// export const dbAnchor2 = db.ref("esp32/json/Anchor2")
// export const dbAnchor3 = db.ref("esp32/json/Anchor3")

// export const User = db.ref("user")

export default firebase;
