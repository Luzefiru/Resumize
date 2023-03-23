import React from 'react';
import Logo from '../../res/logo-combination-white.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img className="Header__logo" src={Logo} alt="Logo"></img>
      </header>
    );
  }
}

export default Header;
