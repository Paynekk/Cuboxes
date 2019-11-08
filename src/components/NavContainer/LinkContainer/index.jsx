import React from 'react';
import Link from './NormalLink'
import './syles.scss'
import ButtonBox from '../../ButtonBox';


const LinkContainer = ({ links }) => {
  return (
    <div className="nav__linkContainer">
      {
        links.map(link => {
          switch (link.type) {
            case "button":
              return (
                <ButtonBox
                  name="Quiero ser Cuboxer"
                  type="small"
                />
              )
            default:
              return  (
                <Link
                  name={link.name}
                  url={link.url}
                  type={link.type}
                />
              )
          }
        })
      }
    </div>
  )
}


export default LinkContainer;