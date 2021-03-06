import React from 'react';
import './styles.scss'

import ButtonBox from "../../ButtonBox"

const knowMore = ({ title, description }) => {
  return (
    <div className={`knowMoreContainer_knowMore`}>
      <h1 className={`knowMoreContainer_knowMore_tittle`}>
        {title}

      </h1>
      <p className={`knowMoreContainer_knowMore_text`}>
        {description}
      </p>
      <ButtonBox
        name="Quiero ser más"
        type="smallContorno"
      />
    </div>
  );
}

export default knowMore;