import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

/* firebase code */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAKl9Wg7kJUUFuir-UKr8AOQFdvElMjKA',
  authDomain: 'resumize-9630a.firebaseapp.com',
  projectId: 'resumize-9630a',
  storageBucket: 'resumize-9630a.appspot.com',
  messagingSenderId: '698288735788',
  appId: '1:698288735788:web:edf938cb37b8587ac83389',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('You are logged in!');
  } else {
    console.log('Please login.');
  }
});

/* main code */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="auth-wrapper">
      <Login />
      <Signup />
    </div>

    {/* <App /> */}
  </React.StrictMode>
);
