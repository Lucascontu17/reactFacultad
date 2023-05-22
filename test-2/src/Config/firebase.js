import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV9gEwB9sS_H0AgzB-9wQNdiUEJdBjvUo",
    authDomain: "react-lucas-e45c3.firebaseapp.com",
    databaseURL: "https://react-lucas-e45c3-default-rtdb.firebaseio.com",
    projectId: "react-lucas-e45c3",
    storageBucket: "react-lucas-e45c3.appspot.com",
    messagingSenderId: "134522384297",
    appId: "1:134522384297:web:bc8baabce1f5073a411eb8",
    measurementId: "G-E8ZE031LBT"
  };

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db=firebase.firestore();
export default firebase