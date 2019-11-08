import React from 'react';
import KnowMore from'./KnowMore'
import ImageContainer from './ImageContainer';
import './styles.scss'
import { Row, Col } from 'react-flexbox-grid';
const knowMoreContainer = () => (
     <Row className = "knowMoreContainer">
     <Col xs={12} sm={3} md={2} lg={6}>
     <KnowMore/>
     </Col>
     <Col xs={12} sm={3} md={2} lg={6}>
      <ImageContainer/></Col>
     </Row>
      );

export default knowMoreContainer
;