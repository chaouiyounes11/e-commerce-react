import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBmUZ_gAc_8BK0UBR0iMy-X5_8k6cqly9k",
    authDomain: "e-commerce-react-efc27.firebaseapp.com",
    databaseURL: "https://e-commerce-react-efc27.firebaseio.com",
    projectId: "e-commerce-react-efc27",
    storageBucket: "e-commerce-react-efc27.appspot.com",
    messagingSenderId: "1086530780692",
    appId: "1:1086530780692:web:9f98c5fde92887e42a3101"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
