import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZG-yyUeH47II7rzZbuGR6qf5tq3d3nCI',
  authDomain: 'mood-tracker-1fd54.firebaseapp.com',
  databaseURL: 'https://mood-tracker-1fd54.firebaseio.com',
  projectId: 'mood-tracker-1fd54',
  storageBucket: 'mood-tracker-1fd54.appspot.com',
  messagingSenderId: '798912107109',
  appId: '1:798912107109:web:b84b6bc984a0c0c9bcec8c',
  measurementId: 'G-2V6FRXSVJE',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
