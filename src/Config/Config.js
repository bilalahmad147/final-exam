// import * as firebase from 'firebase';
// import '@firebase/auth';
import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/firestore')
require('firebase/database')
// import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9QHn9Y9K9RhNJn8DYkSQwefuwdHnQQXE",
    authDomain: "recruitment-system-921c9.firebaseapp.com",
    projectId: "recruitment-system-921c9",
    storageBucket: "recruitment-system-921c9.appspot.com",
    messagingSenderId: "244491367995",
    appId: "1:244491367995:web:a26116ff2c85b66ae38e1e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };