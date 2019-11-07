import React from 'react';
import './styles.scss'
import img from './logo@3x.png'
function Logo() {
  return (
      <img className="nav__logocontainer__logo" src={img} alt=""/>  
  );
}

export default Logo;