import React from 'react';
import KnowMore from './KnowMore'
import ImageContainer from './ImageContainer';
import { Row, Col } from 'react-flexbox-grid';


const knowMoreContainer = ({ title, description}) => {

	return (
		<Row>
			<Col xs={12} sm={3} md={6} lg={6}>
				<KnowMore
					title={title}
					description={description}
				/>
			</Col>
			<Col xs={12} sm={3} md={6} lg={6}>
				<ImageContainer />
			</Col>
		</Row>
	);
}
export default knowMoreContainer;