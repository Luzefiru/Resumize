import './Login.css';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import sideImage from '../../res/sign-in-banner.png';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const submitBtn = document.querySelector('.Login__submit-btn');
    submitBtn.classList.remove('has-error');
  }, [email, password]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form-wrapper">
      <img
        className="form-wrapper__img"
        src={sideImage}
        alt="Your dream resume is a click away."
      ></img>
      <form className="Login">
        <div className="Login-wrapper">
          <h1 className="Login__heading">Log in to Resumize.</h1>
          <div className="Login__login-link">
            Not yet a member?{' '}
            <span onClick={props.toggleLogin} className="form-link">
              Sign up.
            </span>
          </div>
          <div className="Login__field">
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
          <div className="Login__field">
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
            className="Login__submit-btn"
            type="button"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

// uses signInWithEmailAndPassword() firebase function to sign into the auth service
async function handleLogin() {
  const email = document.querySelector('#email--login').value;
  const password = document.querySelector('#password--login').value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Successfully logged in: ', userCredential);
  } catch (error) {
    const submitBtn = document.querySelector('.Login__submit-btn');
    submitBtn.classList.add('has-error');
    submitBtn.setAttribute('error', translateFirebaseLoginError(error.code));

    throw new Error(error.code);
  }
}

/**
 *
 * @param {string} errorCode the caught error.code after using Firebase's {signInWithEmailAndPassword}
 * @returns a string containing corresponding error message for displaying to the login UI
 */
function translateFirebaseLoginError(errorCode) {
  const errorDict = {
    'auth/invalid-email': 'Invalid email.',
    'auth/missing-password': 'Missing password.',
    'auth/wrong-password': 'Wrong password.',
  };

  return errorDict[errorCode] + ' Try again.';
}
