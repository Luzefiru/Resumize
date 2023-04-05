import './Signup.css';
import { useState } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const handleCreateUser = async () => {
  const email = document.querySelector('#email--signup').value;
  const password = document.querySelector('#password--signup').value;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  console.log(userCredential);
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="Signup">
      <fieldset className="Signup__fieldset">
        <legend>Sign Up</legend>
        <div className="Signup__fieldset__field">
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
            minLength={8}
          />
        </div>
        <div className="Signup__fieldset__field">
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
          />
        </div>

        <button
          onClick={handleCreateUser}
          className="Signup__fieldset__submit-btn"
          type="button"
        >
          Sign Up
        </button>
      </fieldset>
    </form>
  );
}
