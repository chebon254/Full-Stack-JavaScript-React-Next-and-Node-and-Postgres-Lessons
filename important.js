// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsVC5UlgY8bpkxo_KBqlZ7DIoKWqW9IMw",
    authDomain: "fullstackclassesforchebon.firebaseapp.com",
    projectId: "fullstackclassesforchebon",
    storageBucket: "fullstackclassesforchebon.firebasestorage.app",
    messagingSenderId: "714081188521",
    appId: "1:714081188521:web:4988b97dc4648a0d23c7b8",
    measurementId: "G-3L5REZ88K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);








