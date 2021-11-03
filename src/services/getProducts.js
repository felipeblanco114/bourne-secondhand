import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt1qqF0y_0v__V9GAdoVDWwxjCyICSjpY",
    authDomain: "bourne-secondhand.firebaseapp.com",
    projectId: "bourne-secondhand",
    storageBucket: "bourne-secondhand.appspot.com",
    messagingSenderId: "750650379025",
    appId: "1:750650379025:web:962279e86dd59f27f1dab0"
  };

  const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}