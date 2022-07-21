import React from 'react';
import SocialLinks from '../social-links/SocialLinks';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<a
				href='https://github.com/mpurcella/portfoliov2'
				className='footer-link'
				target='_blank'
				rel='noopener noreferrer'
			>
				Designed &amp; built by Mike&nbsp;Purcella
			</a>
			<SocialLinks socialLinksClassName='social-links-list footer-social' />
			<p className='footer-copyright'>&#169; 2022 Mike Purcella. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
