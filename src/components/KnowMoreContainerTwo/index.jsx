import React from 'react';
import KnowMore from './KnowMoreTwo'
import ImageContainer from './ImageContainer';
import './styles.scss'
import { Row, Col } from 'react-flexbox-grid';


const knowMoreContainerTwo = ({ title, description }) => {
	return (
		<Row className={`knowMoreContainerTwo`}>
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
export default knowMoreContainerTwo;