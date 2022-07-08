import { initializeApp } from 'firebase/app';
import {  getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({ 
        apiKey: "AIzaSyBeq17BgctxNaxGBoA6oD-IODQdfo1oRhc",
        authDomain: "react-auth-com.firebaseapp.com",
        projectId: "react-auth-com",
        storageBucket: "react-auth-com.appspot.com",
        messagingSenderId: "1096744029008",
        appId: "1:1096744029008:web:ebe174aba25344dd0cfa55",
        measurementId: "G-RQ6FFK97W0"
});
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in');
    } else {
        console.log('no user');
    }
});
