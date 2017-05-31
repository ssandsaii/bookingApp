import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB3Nx3V4YBpnMZU4Qtntmnjn9TmsKES_2E",
    authDomain: "logindata-6f555.firebaseapp.com",
    databaseURL: "https://logindata-6f555.firebaseio.com",
    projectId: "logindata-6f555",
    storageBucket: "logindata-6f555.appspot.com",
    messagingSenderId: "959414199682"
  };


  export const firebaseApp = firebase.initializeApp(config);
  export const bookingRef = firebase.database().ref();
