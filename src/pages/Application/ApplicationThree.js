import React from 'react';
import { applicationdata } from './Data';
import { ApplicationThreeHome } from '../../components';

const ApplicationThree = () => {
	return (
		<>
			<ApplicationThreeHome {...applicationdata}/>
		</>
	)
}

export default ApplicationThree