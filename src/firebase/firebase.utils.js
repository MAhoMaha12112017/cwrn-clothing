import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyChifsITQHhvsBinmM5_ZEek9NZcUNlz_Q",
  authDomain: "crwn-db-e417c.firebaseapp.com",
  databaseURL: "https://crwn-db-e417c.firebaseio.com",
  projectId: "crwn-db-e417c",
  storageBucket: "",
  messagingSenderId: "977787624418",
  appId: "1:977787624418:web:4811fbe34dc0c1b2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;