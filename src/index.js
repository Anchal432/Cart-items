import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
//import {initializeApp} from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCS_9AN85ZexYZcEwROkoAbiocXuRgelZw",
  authDomain: "cart-d1611.firebaseapp.com",
  projectId: "cart-d1611",
  storageBucket: "cart-d1611.appspot.com",
  messagingSenderId: "243263441135",
  appId: "1:243263441135:web:009fb8b9ccb8536a64b31a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//serviceWorker.unregister();



