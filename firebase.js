import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB_Uy-AxO10Kv2kwbUot5KmCNYHGotLIeE",
    authDomain: "reminisce-7b4e3.firebaseapp.com",
    projectId: "reminisce-7b4e3",
    storageBucket: "reminisce-7b4e3.appspot.com",
    messagingSenderId: "256052502175",
    appId: "1:256052502175:web:e09315ae4f8cc5600d4caa",
    measurementId: "G-76547HJD47"
  };
  let app;
  if(firebase.apps.length ===0){
    app =firebase.initializeApp(firebaseConfig)
  }
  else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {auth, db};