import React from 'react';
import { applicationdata } from './Data';
import { ApplicationTwoHome } from '../../components';

const ApplicationTwo = () => {
	return (
		<>
			<ApplicationTwoHome {...applicationdata}/>
		</>
	)
}

export default ApplicationTwo