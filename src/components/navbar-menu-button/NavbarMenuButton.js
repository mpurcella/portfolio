import React from 'react';
import './NavbarMenuButton.scss';

const NavbarMenuButton = ({ navbarMenu, handleNavbarMenu, focusDisabled, handleFocusDisabled }) => {
	const isExpanded = focusDisabled ? true : false;

	return (
		<button
			className={navbarMenu ? 'navbar-menu-button active' : 'navbar-menu-button'}
			aria-label='Navigation Menu'
			aria-expanded={isExpanded}
			aria-controls='navbar-menu'
			onClick={() => {
				handleNavbarMenu();
				handleFocusDisabled();
			}}
		>
			<div className={navbarMenu ? 'line line-1 active' : 'line line-1'}></div>
			<div className={navbarMenu ? 'line line-2 active' : 'line line-2'}></div>
			<div className={navbarMenu ? 'line line-3 active' : 'line line-3'}></div>
		</button>
	);
};

export default NavbarMenuButton;
