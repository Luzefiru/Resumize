import React from 'react';
import Logo from '../../res/logo-combination-white.svg';
import './Header.css';

import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';

const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("You've signed out.");
    })
    .catch((e) => {
      console.log('Failed to sign out:', e);
    });
};

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img className="Header__logo" src={Logo} alt="Logo"></img>
        <div onClick={logOut} className="Header__logout">
          Log Out
        </div>
      </header>
    );
  }
}

export default Header;
