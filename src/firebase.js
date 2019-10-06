import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({

  apiKey: "AIzaSyCdCxFouYPwnr-trUZT2ip4jsuaYzqDKA8",
    authDomain: "fearns-todoist.firebaseapp.com",
    databaseURL: "https://fearns-todoist.firebaseio.com",
    projectId: "fearns-todoist",
    storageBucket: "fearns-todoist.appspot.com",
    messagingSenderId: "636288630852",
    appId: "1:636288630852:web:21f77609a3dab89435bc11"
});

export { firebaseConfig as firebase };