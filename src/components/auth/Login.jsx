import './Login.css';

import { useState } from 'react';

import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="Login">
      <fieldset className="Login__fieldset">
        <legend>Log In</legend>
        <div className="Login__fieldset__field">
          <label htmlFor="email--login">Email Address</label>
          <input
            onChange={handleChangeEmail}
            type="email--login"
            name="email--login"
            id="email--login"
            value={email}
            required
          />
        </div>
        <div className="Login__fieldset__field">
          <label htmlFor="password--login">Password</label>
          <input
            onChange={handleChangePassword}
            type="password--login"
            name="password--login"
            id="password--login"
            value={password}
            required
          />
        </div>

        <button
          onClick={handleLogin}
          className="Login__fieldset__submit-btn"
          type="button"
        >
          Log In
        </button>
      </fieldset>
    </form>
  );
}
