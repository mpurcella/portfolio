import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavbarMenuButton from '../../components/navbar-menu-button/NavbarMenuButton';
import './Navbar.scss';
import NavbarMenu from '../../components/navbar-menu/NavbarMenu';

const Navbar = ({ heroRef, aboutRef, technologiesRef, workRef, contactRef }) => {
	// Sets state of Navbar Menu Button and Navbar Menu
	const [navbarMenu, setNavbarMenu] = useState(false);

	const handleNavbarMenu = () => {
		setNavbarMenu(!navbarMenu);
	};

	const closeNavbarMenu = () => {
		setNavbarMenu(false);
	};

	// Sets state of Header when scrolled
	const [headerScrolled, setHeaderScroll] = useState(false);

	const handleHeaderScrolled = () => {
		if (window.scrollY > 60) {
			setHeaderScroll(true);
		} else {
			setHeaderScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleHeaderScrolled);

		return () => {
			window.removeEventListener('scroll', handleHeaderScrolled);
		};
	}, [headerScrolled]);

	// Handles classNames for Header/Navbar
	const headerClassNames = classNames('header', {
		scrolled: headerScrolled
	});

	// Scrolls to 'Top' Section
	const handleTopScroll = () => {
		heroRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<header className={headerClassNames}>
			<nav className='navbar'>
				<Link
					to='/'
					className='navbar-logo-link'
					aria-label='Top of Page'
					onClick={() => {
						closeNavbarMenu();
						handleTopScroll();
					}}
				>
					<svg
						version='1.2'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 2230 1575'
						width='2230'
						height='1575'
					>
						<g id='Layer 1'>
							<g id='&lt;Group&gt;'>
								<path
									id='&lt;Path&gt;'
									className='s0'
									d='m786.3 240l-515.4 889h-264.4l584.6-1008.5c20.5-35.6 50.2-64 85.7-83.7 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.2 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l70.9 122.8-132.4 228.3z'
								/>
								<path
									id='&lt;Path&gt;'
									className='s0'
									d='m2223.5 1147.7c-1.3 72.3-21.3 144.1-57.9 207.4-36.6 63.4-88.7 116.5-150.8 153.8-65.9 39.6-142.1 60.5-220.5 60.5-75.2 0-149.3-19.8-214.4-57.4-65.1-37.6-119.4-91.9-156.9-157l-129.6-224.5 132.4-228.5 195.3 338.6c35.6 61.7 102 100 173.2 100 72.3 0 137-37.3 173.1-99.9 36.2-62.6 36.2-137.4 0.1-200l-0.3-0.6-455.1-799.4-767.7 1325.3h-264.4l836.9-1444.8c20.6-35.6 50.2-64.7 85.7-84.4 33.3-18.5 71.2-28.2 109.5-28.2 38.4 0 76.3 9.7 109.6 28.2 35.5 19.7 65.1 48.9 85.6 84.5l0.4 0.6 458.2 804.9c39 67.8 58.9 144.1 57.6 220.9z'
								/>
							</g>
						</g>
					</svg>
				</Link>
				<NavbarMenuButton navbarMenu={navbarMenu} handleNavbarMenu={handleNavbarMenu} />
				<NavbarMenu
					navbarMenu={navbarMenu}
					closeNavbarMenu={closeNavbarMenu}
					aboutRef={aboutRef}
					technologiesRef={technologiesRef}
					workRef={workRef}
					contactRef={contactRef}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
