
import firebase from 'firebase/app'
import 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSoTcSJjrHM6Ru0Xe-z85Ze_1HK40OeOE",
    authDomain: "taskman-3a0b5.firebaseapp.com",
    databaseURL: "https://taskman-3a0b5.firebaseio.com",
    projectId: "taskman-3a0b5",
    storageBucket: "taskman-3a0b5.appspot.com",
    messagingSenderId: "726671453380"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  export default db;