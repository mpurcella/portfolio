import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarLinksData } from './NavbarLinksData';
import './NavbarLinks.scss';

const NavbarLinks = ({ closeNavbarMenu, aboutRef, technologiesRef, workRef, contactRef, tabIndex }) => {
	// Scrolls to 'About' Section
	const handleAboutScroll = () => {
		aboutRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	// Scrolls to 'Technologies' Section
	const handleTechnologiesScroll = () => {
		technologiesRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	// Scrolls to 'Work' Section
	const handleWorkScroll = () => {
		workRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	// Scrolls to 'Contact' Section
	const handleContactScroll = () => {
		contactRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	// Sets 'About' Navbar Link to Active
	const [aboutActive, setAboutActive] = useState(false);

	const handleAboutActive = () => {
		const about = document.querySelector('#about');
		const aboutTop = about.getBoundingClientRect().top;
		const aboutBottom = about.getBoundingClientRect().bottom;

		if (aboutTop > 60 && aboutBottom > 60) {
			setAboutActive(false);
		} else if (aboutTop <= 60 && aboutBottom > 60) {
			setAboutActive(true);
		} else if (aboutTop <= 60 && aboutBottom < 60) {
			setAboutActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleAboutActive);

		return () => {
			window.removeEventListener('scroll', handleAboutActive);
		};
	}, [aboutActive]);

	// Sets 'Technologies' Navbar Link to Active
	const [technologiesActive, setTechnologiesActive] = useState(false);

	const handleTechnologiesActive = () => {
		const technologies = document.querySelector('#technologies');
		const technologiesTop = technologies.getBoundingClientRect().top;
		const technologiesBottom = technologies.getBoundingClientRect().bottom;

		if (technologiesTop > 60 && technologiesBottom > 60) {
			setTechnologiesActive(false);
		} else if (technologiesTop <= 60 && technologiesBottom > 60) {
			setTechnologiesActive(true);
		} else if (technologiesTop <= 60 && technologiesBottom < 60) {
			setTechnologiesActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleTechnologiesActive);

		return () => {
			window.removeEventListener('scroll', handleTechnologiesActive);
		};
	}, [technologiesActive]);

	// Sets 'Work' Navbar Link to Active
	const [workActive, setWorkActive] = useState(false);

	const handleWorkActive = () => {
		const work = document.querySelector('#work');
		const workTop = work.getBoundingClientRect().top;
		const workBottom = work.getBoundingClientRect().bottom;

		if (workTop > 60 && workBottom > 60) {
			setWorkActive(false);
		} else if (workTop <= 60 && workBottom > 60) {
			setWorkActive(true);
		} else if (workTop <= 60 && workBottom < 60) {
			setWorkActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleWorkActive);

		return () => {
			window.removeEventListener('scroll', handleWorkActive);
		};
	}, [workActive]);

	// Sets 'Contact' Navbar Link to Active
	const [contactActive, setContactActive] = useState(false);

	const handleContactActive = () => {
		const contact = document.querySelector('#contact');
		const contactTop = contact.getBoundingClientRect().top;
		const contactBottom = contact.getBoundingClientRect().bottom;

		if (contactTop > 60 && contactBottom > 60) {
			setContactActive(false);
		} else if (contactTop <= 60 && contactBottom > 60) {
			setContactActive(true);
		} else if (contactTop <= 60 && contactBottom < 60) {
			setContactActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleContactActive);

		return () => {
			window.removeEventListener('scroll', handleContactActive);
		};
	}, [contactActive]);

	return (
		<ul className='navbar-links-list'>
			<li className='navbar-links-item'>
				<Link
					to={navbarLinksData[0].linkPath}
					title={navbarLinksData[0].linkName}
					className={aboutActive ? 'navbar-links-link active' : 'navbar-links-link'}
					onClick={(e) => {
						e.preventDefault();
						handleAboutScroll();
						closeNavbarMenu();
					}}
					tabIndex={tabIndex}
				>
					{navbarLinksData[0].linkName}
				</Link>
			</li>
			<li className='navbar-links-item'>
				<Link
					to={navbarLinksData[1].linkPath}
					title={navbarLinksData[1].linkName}
					className={technologiesActive ? 'navbar-links-link active' : 'navbar-links-link'}
					onClick={(e) => {
						e.preventDefault();
						handleTechnologiesScroll();
						closeNavbarMenu();
					}}
					tabIndex={tabIndex}
				>
					{navbarLinksData[1].linkName}
				</Link>
			</li>
			<li className='navbar-links-item'>
				<Link
					to={navbarLinksData[2].linkPath}
					title={navbarLinksData[2].linkName}
					className={workActive ? 'navbar-links-link active' : 'navbar-links-link'}
					onClick={(e) => {
						e.preventDefault();
						handleWorkScroll();
						closeNavbarMenu();
					}}
					tabIndex={tabIndex}
				>
					{navbarLinksData[2].linkName}
				</Link>
			</li>
			<li className='navbar-links-item'>
				<Link
					to={navbarLinksData[3].linkPath}
					title={navbarLinksData[3].linkName}
					className={contactActive ? 'navbar-links-link active' : 'navbar-links-link'}
					onClick={(e) => {
						e.preventDefault();
						handleContactScroll();
						closeNavbarMenu();
					}}
					tabIndex={tabIndex}
				>
					{navbarLinksData[3].linkName}
				</Link>
			</li>
		</ul>
	);
};

export default NavbarLinks;
