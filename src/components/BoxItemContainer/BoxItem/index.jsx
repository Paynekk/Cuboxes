import React from 'react';
import './styles.scss'


const BoxItem = ({ text, image }) => (
  <div className="boxitemcontainer__boxitem">
    <img className="boxitemcontainer__boxitem__img" src={image} alt="" />
    <p className="boxitemcontainer__boxitem__text">{text}</p>
  </div>
);

export default BoxItem;