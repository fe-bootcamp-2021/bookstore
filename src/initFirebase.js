import firebase from "firebase/app";
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDW5xCoVHzl3tKkyuGNNJBcrCnNSjtGCpk",
    authDomain: "bookstore-f3713.firebaseapp.com",
    databaseURL: "https://bookstore-f3713-default-rtdb.firebaseio.com",
    projectId: "bookstore-f3713",
    // storageBucket: "bookstore-f3713.appspot.com",
    // messagingSenderId: "1098879020073",
    // appId: "1:1098879020073:web:09f43086d4cf951b1bc038",
    // measurementId: "G-PQMBF567ZP"
  };

  function initFirebase() {
      if(!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig)
      };
  };

  initFirebase();

  export { firebase }