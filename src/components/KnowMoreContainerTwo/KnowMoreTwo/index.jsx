import React from 'react';
import './styles.scss'
import ButtonBox from '../../ButtonBox';

const knowMore = ({ title, description }) => {
  return (
    <div className={`knowMoreContainer_knowMoreTwo`}>
      <h1 className={`knowMoreContainer_knowMore_tittleTwo`}>
        {title}

      </h1>
      <p className={`knowMoreContainer_knowMore_textTwo`}>
        {description}
      </p>
      <div className="knowMoreContainer_knowMoreTwo_button">
      <ButtonBox 
        name="Quiero ser Cuboxer"
        type="smallContorno"
      />
      </div>
      
    </div>

  );
}

export default knowMore;