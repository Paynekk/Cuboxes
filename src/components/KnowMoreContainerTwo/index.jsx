import React from 'react';
import PropTypes from 'prop-types'
import KnowMore from './KnowMoreTwo'
import ImageContainer from './ImageContainer';
import './styles.scss'
import { Row, Col } from 'react-flexbox-grid';
import { ip } from 'address';


const knowMoreContainerTwo = ({ title, description }) => {
	return (
		<Row className={'knowMoreContainerTwo'}>
			<Col xs={12} sm={3} md={2} lg={6}>
				<ImageContainer />
			</Col>
			<Col xs={12} sm={3} md={2} lg={6}>
				<KnowMore
					title={title}
					description={description}
				/>
			</Col>

		</Row>
	);
}
knowMoreContainerTwo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default knowMoreContainerTwo;