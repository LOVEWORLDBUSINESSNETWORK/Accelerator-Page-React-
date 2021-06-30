import React from 'react'
import styled from 'styled-components';
import Profile from './Profile';

const DashContainer = styled.div`
	background-color: ${({theme}) => theme.secondary};
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 16rem;
	display: flex;
	flex-direction:  column;
	align-items: center;
`;

const Sidebar = () => {
	return (
		<DashContainer>
			<Profile />
		</DashContainer>
	)
}

export default Sidebar
