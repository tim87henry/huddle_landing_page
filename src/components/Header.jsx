import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo'></img>
    </div>
  )
}

export default Header