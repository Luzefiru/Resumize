import './Auth.css';

// import Login from './Login';
import Signup from './Signup';
import App from '../../App';

import { useState } from 'react';

import { auth } from '../../firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';

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
        <Signup />
      </div>
    );
  }
}
