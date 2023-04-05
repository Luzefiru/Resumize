import './Login.css';

import { useState } from 'react';

export default function Login(props) {
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
          />
        </div>

        <button
          onClick={props.handleLogin}
          className="Login__fieldset__submit-btn"
          type="button"
        >
          Log In
        </button>
      </fieldset>
    </form>
  );
}
