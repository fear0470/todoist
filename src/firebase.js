import firebasefrom 'firebase/app';
import 'firebase/firestore;'

const firebaseConfig = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messageSenderId: '',
  apiId: '',
}) 

export { firebaseConfig as firebase };