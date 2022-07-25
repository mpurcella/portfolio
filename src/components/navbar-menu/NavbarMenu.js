import React, { useEffect } from 'react';
import NavbarLinks from '../../containers/navbar-links/NavbarLinks';
import SocialLinks from '../social-links/SocialLinks';
import './NavbarMenu.scss';

const NavbarMenu = ({ navbarMenu, closeNavbarMenu, aboutRef, technologiesRef, workRef, contactRef, focusDisabled }) => {
	// Disables scrolling & blurs "Main" and "Footer" when Navbar Menu is open
	useEffect(() => {
		const body = document.body;
		const main = document.querySelector('.main');
		const footer = document.querySelector('.footer');

		body.classList.toggle('scroll-disabled', navbarMenu);
		main.classList.toggle('page-blur', navbarMenu);
		footer.classList.toggle('page-blur', navbarMenu);

		return () => {
			body.classList.remove('scroll-disabled', navbarMenu);
			main.classList.remove('page-blur', navbarMenu);
			footer.classList.remove('page-blur', navbarMenu);
		};
	}, [navbarMenu]);

	// Sets Tab Index for Navbar Menu Links
	const tabIndex = focusDisabled ? 0 : -1;

	return (
		<div className={navbarMenu ? 'navbar-menu open' : 'navbar-menu'} id='navbar-menu'>
			<NavbarLinks
				closeNavbarMenu={closeNavbarMenu}
				aboutRef={aboutRef}
				technologiesRef={technologiesRef}
				workRef={workRef}
				contactRef={contactRef}
				tabIndex={tabIndex}
			/>
			<SocialLinks socialLinksClassName='social-links-list navbar-menu-social' tabIndex={tabIndex} />
		</div>
	);
};

export default NavbarMenu;
