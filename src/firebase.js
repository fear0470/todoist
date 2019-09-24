import firebasefrom 'firebase/app';
import 'firebase/firestore;'

const firebaseConfig = firebase.initializeApp({

  apiKey: 'AIzaSyCdCxFouYPwnr-trUZT2ip4jsuaYzqDKA8',
  authDomain: 'fearns-todoist.firebaseapp.com',
  databaseURL: 'https://fearns-todoist.firebaseio.com',
  projectId: 'fearns-todoist',
  storageBucket: 'fearns-todoist.appspot.com',
  messageSenderId: '636288630852',
  apiId: '1:636288630852:web:21f77609a3dab89435bc11',
}) 

export { firebaseConfig as firebase };