import React from 'react';
import { applicationdata } from './Data';
import { ApplicationOneHome } from '../../components';

const ApplicationOne = () => {
	return (
		<>
			<ApplicationOneHome {...applicationdata}/>
		</>
	)
}

export default ApplicationOne
