import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD03ripb5qjDnu1buHoHyN13kFbzgMMx8k',
  authDomain: 'educa-online-learning-platform.firebaseapp.com',
  projectId: 'educa-online-learning-platform',
  storageBucket: 'educa-online-learning-platform.appspot.com',
  messagingSenderId: '857609934251',
  appId: '1:857609934251:web:4c0870bbcb29d0b92f2eee',
  measurementId: 'G-7D1PL7SWZ4',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
