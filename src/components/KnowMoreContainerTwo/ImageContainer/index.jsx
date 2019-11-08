import React from 'react';
import image from'./image@3x.png'
import './styles.scss'

const ImageContainer = () => (
      <div>
      <img className="knowMore_knowMoreContainer_image" src={image} alt=""/>
      </div>
  );

export default ImageContainer;