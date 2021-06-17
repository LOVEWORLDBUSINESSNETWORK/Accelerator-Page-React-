import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from './Navbar.elements'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobilMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	};

	useEffect (() => {
		showButton()
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/' onClick={closeMobilMenu}>
						<NavIcon />
						ULTRA
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</MobileIcon>
					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavLink to='/'>
								LBN
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/services'>
								Update
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/products'>
								Resources
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/about'>
								StartUp Fund
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/faq'>
								Exhibition
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/faq'>
								Business Connect
							</NavLink>
						</NavItem>

						<NavItemBtn>
							{button ? (
								<NavBtnLink to='sign-up'>
									<Button primary>
										Sign Up
									</Button>
								</NavBtnLink>
							) : (
								<NavBtnLink to='sign-up'>
									<Button fontBig primary>
										Sign Up
									</Button>
								</NavBtnLink>
							)}
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
		</>
	)
}

export default Navbar
