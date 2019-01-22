
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBz57C0iol2-oEBh4Vjt5MwnB3KdUNNyeM",
    authDomain: "aos-yazilim-plan.firebaseapp.com",
    databaseURL: "https://aos-yazilim-plan.firebaseio.com",
    projectId: "aos-yazilim-plan",
    storageBucket: "aos-yazilim-plan.appspot.com",
    messagingSenderId: "99428161508"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
