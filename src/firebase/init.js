import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDQ58jZdYg42lQiFdAoT7kWjb0_x8Iu1oM",
    authDomain: "xat-firebase.firebaseapp.com",
    databaseURL: "https://xat-firebase.firebaseio.com",
    projectId: "xat-firebase",
    storageBucket: "xat-firebase.appspot.com",
    messagingSenderId: "139338842900",
    appId: "1:139338842900:web:cae6f7e74a627bf25fb801",
    measurementId: "G-H4HXVRDLJW"
  };
  var firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings();

  export default firebaseApp.firestore();
