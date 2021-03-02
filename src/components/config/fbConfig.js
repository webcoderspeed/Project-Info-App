import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCU7Qv5N9Y-miNbctKchF6ELynqdhGAMc8",
    authDomain: "project-app-63752.firebaseapp.com",
    projectId: "project-app-63752",
    storageBucket: "project-app-63752.appspot.com",
    messagingSenderId: "415812719283",
    appId: "1:415812719283:web:a6a49b19febc71daa396c6",
    measurementId: "G-KGPB7NXD7X"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase 