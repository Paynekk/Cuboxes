import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
const Link = ({name, url}) => {
  return (
    <a className="nav__linkContainer__link" href={url}>{name}</a>
  );
};

Link.propTypes = {
  name:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
};

export default Link;