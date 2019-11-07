import React from 'react';
import PropTypes from 'prop-types';
import LogoContainer from './LogoContainer';
import LinkContainer from './LinkContainer';
import { Row, Col} from 'react-flexbox-grid';
import "./styles.scss"



function NavContainer({ links }) {
  return (
    <Row className="nav">
      <Col xs={12} sm={3} md={2} lg={6} >
        <LogoContainer />
      </Col>
      <Col xs={12} sm={3} md={2} lg={6} >
        <LinkContainer links={links} />
      </Col>
    </Row>
  );
}

NavContainer.propTypes = {

};


export default NavContainer;