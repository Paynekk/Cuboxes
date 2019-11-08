import React from 'react';
import BoxItem from './BoxItem'
import { Row, Col } from 'react-flexbox-grid';
import './styles.scss'
import Link from '../NavContainer/LinkContainer/Link';


const BoxItemContainer = ({ boxItems }) => {
  return (
    <div>
      <div className="boxitemcontainer">
        {
          boxItems.map(function (item) {

            return (
              <BoxItem
                text={item.text}
                image={item.image}
              />
            )
          })
        }
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="boxitemcontainer__containerButton">
            <Link
             className="boxitemcontainer__containerButton__button"
              name="Quiero ser un Cuboxer"
              url="#"
            />
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default BoxItemContainer;