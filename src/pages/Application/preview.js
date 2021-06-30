import React from 'react'
import { previewdata } from './Data'
import { Preview } from '../../components';

const preview = () => {
	return (
		<>
			<Preview {...previewdata}/>
		</>
	)
}

export default preview