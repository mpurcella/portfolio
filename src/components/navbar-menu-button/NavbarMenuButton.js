import React from 'react';
import './NavbarMenuButton.scss';

const NavbarMenuButton = ({ navbarMenu, handleNavbarMenu }) => {
	return (
		<button className='navbar-menu-button' aria-label='Navigation Menu' onClick={handleNavbarMenu}>
			<div className={navbarMenu ? 'line line-1 active' : 'line line-1'}></div>
			<div className={navbarMenu ? 'line line-2 active' : 'line line-2'}></div>
			<div className={navbarMenu ? 'line line-3 active' : 'line line-3'}></div>
		</button>
	);
};

export default NavbarMenuButton;
