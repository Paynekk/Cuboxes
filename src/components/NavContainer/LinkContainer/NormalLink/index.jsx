import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const NormalLink = ({ name, type, url }) => {
  return (
    <a className={`nav__linkContainer__normalLink--${type}`} href={url}>{name}</a>
  );
};

NormalLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NormalLink;