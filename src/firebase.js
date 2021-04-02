// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynY9jxN3PyzZPYWshNPUW1CTI2tF2Tkk",
  authDomain: "facebook-clone-f9e44.firebaseapp.com",
  projectId: "facebook-clone-f9e44",
  storageBucket: "facebook-clone-f9e44.appspot.com",
  messagingSenderId: "711150827848",
  appId: "1:711150827848:web:e75e1d855ebd1eeb3a1b7d",
  measurementId: "G-19B0VPX3QF"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;