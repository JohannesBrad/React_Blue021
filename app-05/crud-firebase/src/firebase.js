import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBmntPJeRloVPwpIgkJukCaDRIchhYRlsg",
    authDomain: "crud-udemy-641a3.firebaseapp.com",
    projectId: "crud-udemy-641a3",
    storageBucket: "crud-udemy-641a3.appspot.com",
    messagingSenderId: "235144945991",
    appId: "1:235144945991:web:ebcf4ec148db02d3192c62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}