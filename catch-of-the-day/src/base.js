import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArnCH0qt6aU5MDkiRmATUfpTIP-FHChu8",
    authDomain: "catch-of-the-day-ben-c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ben-c-default-rtdb.firebaseio.com"

})

const base = Rebase.createClass(firebaseApp.database());

//this is a name export
export {firebaseApp}

//default export
export default base;