// el nombre { firebase } -> puede ser cualquiera
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBmntPJeRloVPwpIgkJukCaDRIchhYRlsg",
    authDomain: "crud-udemy-641a3.firebaseapp.com",
    projectId: "crud-udemy-641a3",
    storageBucket: "crud-udemy-641a3.appspot.com",
    messagingSenderId: "235144945991",
    appId: "1:235144945991:web:ebcf4ec148db02d3192c62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
  const auth = firebase.auth()
  
  export { db, auth }