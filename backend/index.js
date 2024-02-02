const express = require('express');
const app = express();
const { initializeApp } = require('firebase-admin/app');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVgrmghUXWm_JPvcRzGtH77dvbjOH_MGA",
    authDomain: "salon-79d62.firebaseapp.com",
    projectId: "salon-79d62",
    storageBucket: "salon-79d62.appspot.com",
    messagingSenderId: "234411457322",
    appId: "1:234411457322:web:28213666e9798333e43c53",
    measurementId: "G-52RG9LQN5T"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
app.listen(5000, () => {
    console.log('listening on 5000');
});