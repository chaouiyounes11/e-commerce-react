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

  export const createUserProfileDocument = async (userAuth, additionalData)  => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const  { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
            
        }
    }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
