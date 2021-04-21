import firebase from 'firebase'
require('@firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW7OX9PbQPH3y_ZaEKngC3g_KClvBMMWY",
    authDomain: "storyhub-24620.firebaseapp.com",
    projectId: "storyhub-24620",
    storageBucket: "storyhub-24620.appspot.com",
    messagingSenderId: "350052636900",
    appId: "1:350052636900:web:f617256523bb3822aa74f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();