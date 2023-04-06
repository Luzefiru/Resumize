import './Auth.css';
import App from '../../App';
import { useState } from 'react';
import { auth } from '../../firebase-config.js';
import { onAuthStateChanged } from 'firebase/auth';
import LoginSignupWrapper from './LoginSignupWrapper';

export default function Auth() {
  const [loggedIn, setLoggedIn] = useState(false);
  let userID;

  try {
    // console.log('Current user:', auth.currentUser);
    userID = auth.currentUser.uid;
  } catch (error) {
    console.log('Caught', error);
    userID = null;
  }

  // listen to auth state changes and set state accordingly to conditionally render <App />
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      setLoggedIn(true);
      userID = user.uid;
    } else {
      setLoggedIn(false);
      userID = null;
    }
  });

  // conditionally render <App /> based on {loggedIn} state
  if (loggedIn) {
    return <App userID={userID} />;
  } else
    return (
      <div className="auth-wrapper">
        <LoginSignupWrapper />
      </div>
    );
}
