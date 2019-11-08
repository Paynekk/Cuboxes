import React from 'react';
import BoxItem from './BoxItem'
import { Row, Col } from 'react-flexbox-grid';
import './styles.scss'
import ButtonBox from '../ButtonBox';



const BoxItemContainer = ({ boxItems }) => {
  return (
    <div>
      <div className="boxitemcontainer">
        {
          boxItems.map(function (item, i) {

            return (
              <BoxItem
                key={i}
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
            <ButtonBox
              name="Quiero aplicar para ser un Cuboxer"
              type="larger"
              onHandlerClick={() => alert("Quiero ser Cuboxer")}
            />
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default BoxItemContainer;