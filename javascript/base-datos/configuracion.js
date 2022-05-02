var firebaseConfig = {
    apiKey: "AIzaSyAIExpuIQs3VtsGHzhRxSo2TtOPYqhrpZI",
    authDomain: "usuarios-150fa.firebaseapp.com",
    databaseURL: "https://usuarios-150fa-default-rtdb.firebaseio.com",
    projectId: "usuarios-150fa",
    storageBucket: "usuarios-150fa.appspot.com",
    messagingSenderId: "1023759004864",
    appId: "1:1023759004864:web:7853c3cd49e878666da925"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
