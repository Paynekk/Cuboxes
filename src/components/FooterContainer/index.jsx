import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.scss'
import footerImage from './logo-white@3x.png'
import faceLogo from './facebook-f@3x.png'
import twiterLogo from './twitter@3x.png'
import slackLogo from './slack-hash@3x.png'

const FooterContainer = () => {
  return (
    <div className={"foother"}>
      <Grid className={"footer_container"}>

        <div className="footer_container_containerImg">
          <img className="footer_container_containerImg_image" src={footerImage} alt="footerLogo"></img>
        </div>
        <Row className="footer_container_social">
          <Col xs={12} sm={1} md={2} lg={2}>
            <div className="footer_container_socialMedia">
              <img className="footer_container_socialMedia_logo" src={faceLogo} alt="face" />
              <img className="footer_container_socialMedia_logo" src={twiterLogo} alt="twiter" />
              <img className="footer_container_socialMedia_logo" src={slackLogo} alt="slack" />
            </div>
          </Col>
          <Col xs={12} sm={1} md={7} lg={5}></Col>
          <Col xs={12} sm={1} md={7} lg={5} className="footer_container_pageInfo">
            <p>Aviso de privacidad</p>
            <p>Soporte</p>
            <p>Términos y condiciones</p>
          </Col>

        </Row>

      </Grid>

    </div>
  );
};

FooterContainer.propTypes = {

};

export default FooterContainer;