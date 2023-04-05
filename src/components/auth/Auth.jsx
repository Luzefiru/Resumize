import './Auth.css';

import Login from './Login';
import Signup from './Signup';
import App from '../../App';

import { useState } from 'react';

import { auth } from './firebase.js';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

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
