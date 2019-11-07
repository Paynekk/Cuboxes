import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link'
import './syles.scss'




const LinkContainer = ({ links }) => {
  return (
    <div className = "nav__linkContainer">
      {
        links.map(function (link) {
          return (
            <Link 
            name={link.name}
            url={link.url}
              /> 
          )
        })
      }
    </div>
  )
}
LinkContainer.propTypes = {


};

export default LinkContainer;