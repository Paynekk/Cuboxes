import React from 'react';
import Link from './NormalLink'
import './syles.scss'
import ButtonBox from '../../ButtonBox';


const LinkContainer = ({ links }) => {
  return (
    <div className="nav__linkContainer">
      {
        links.map((link,i)=> {
          switch (link.type) {
            case "button":
              return (
                <ButtonBox
                  key = {i + `${link.type}`}
                  name="Quiero ser Cuboxer"
                  type="small"
                />
              )
            default:
              return  (
                <Link
                  key = {i + `${link.type}`}
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