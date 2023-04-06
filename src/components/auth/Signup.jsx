import './Signup.css';
import { useState } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import sideImage from '../../res/sign-in-banner.png';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const handleCreateUser = async () => {
  const email = document.querySelector('#email--signup').value;
  const password = document.querySelector('#password--signup').value;

  if (!(password.length >= 8 && validateEmail(email))) {
    throw new Error('Sign Up form details do not meet criteria.');
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  console.log(userCredential);
};

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-wrapper">
      <img
        className="form-wrapper__img"
        src={sideImage}
        alt="Your dream resume is a click away."
      ></img>
      <form className="Signup">
        <div className="Signup-wrapper">
          <h1 className="Signup__heading">Sign up to Resumize.</h1>
          <div className="Signup__login-link">
            Already a member?{' '}
            <span onClick={props.toggleLogin} to="/login" className="form-link">
              Log in.
            </span>
          </div>
          <div className="Signup__field">
            <label htmlFor="email--signup">Email Address</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email--signup"
              name="email--signup"
              id="email--signup"
              value={email}
              required
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="Signup__field">
            <label htmlFor="password--signup">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password--signup"
              name="password--signup"
              id="password--signup"
              value={password}
              required
              minLength={8}
              placeholder="minimum of 8 characters"
            />
          </div>

          <button
            onClick={handleCreateUser}
            className="Signup__submit-btn"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
