// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCn8OjntQWBL4fPvDMbDspax0D2fo_pdVY",
  authDomain: "netflix-34dea.firebaseapp.com",
  projectId: "netflix-34dea",
  storageBucket: "netflix-34dea.appspot.com",
  messagingSenderId: "886586586252",
  appId: "1:886586586252:web:64eb8735f746abe18cb7a9",
  measurementId: "G-VGZ2N1LVGH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
export {auth}
export default db;