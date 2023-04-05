import './Auth.css';

import Login from './Login';
import Signup from './Signup';
import App from '../../App';

import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
// Initialize Firebase Auth service
const auth = getAuth(app);
// Initialize AuthEmulator for development purposes, run with: firebase emulators:start --only auth
connectAuthEmulator(auth, 'http://localhost:9099');

// uses signInWithEmailAndPassword() firebase function to sign into the auth service
const handleLogin = async () => {
  const email = document.querySelector('#email--login').value;
  const password = document.querySelector('#password--login').value;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredential);
};

export default function Auth() {
  const [loggedIn, setLoggedIn] = useState(false);

  // listen to auth state changes and set state accordingly to conditionally render <App />
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // conditionally render <App /> based on {loggedIn} state
  if (loggedIn) {
    return <App />;
  } else {
    return (
      <div className="auth-wrapper">
        <Login handleLogin={handleLogin} />
        <Signup />
      </div>
    );
  }
}
