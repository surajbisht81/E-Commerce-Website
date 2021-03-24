// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhT61O2Dc77OrfGetMjSsacuSE5Vyjgw4",
    authDomain: "clone-2c220.firebaseapp.com",
    projectId: "clone-2c220",
    storageBucket: "clone-2c220.appspot.com",
    messagingSenderId: "375480496386",
    appId: "1:375480496386:web:acbcb15601f93d9e21521b",
    measurementId: "G-LC13EN4RNZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };