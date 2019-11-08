import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const ButtonBox = ({ name, type, onHandlerClick }) => {
  return (
    <div
      className={`buttonbox--${type}`}
      onClick={onHandlerClick}
    >
      <p className="buttonbox_text">
        {name}
      </p>
    </div>
  );
};

ButtonBox.propTypes = {
  name: PropTypes.string.isRequired,
  onHandlerClick: PropTypes.func,
};

export default ButtonBox;