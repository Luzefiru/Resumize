import './Auth.css';
import App from '../../App';
import { useState } from 'react';
import { auth } from '../../firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';
import LoginSignupWrapper from './LoginSignupWrapper';

export default function Auth({ children }) {
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
  } else
    return (
      <div className="auth-wrapper">
        <LoginSignupWrapper />
      </div>
    );
}
