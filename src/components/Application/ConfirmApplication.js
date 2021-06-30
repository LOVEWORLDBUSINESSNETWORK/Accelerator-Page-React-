import React from 'react'
import { Container } from '../../globalStyles'
import {
	Confirmation,
	Back,
} from './ApplicationHome.elements'
import smiley from '../../images/smiley.svg'

const ConfirmApplication = () => {
	return (
		<>
			<Container>
				<Confirmation>
					<img src={smiley} alt='smiley'/>
					<p>You have successfully submitted your application</p>
					<Back to='/'>
						Back to Homepage
					</Back>
				</Confirmation>
			</Container>
		</>
	)
}

export default ConfirmApplication
