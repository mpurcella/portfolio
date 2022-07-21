import React from 'react';
import { socialLinksData } from './SocialLinksData';
import './SocialLinks.scss';

const SocialLinks = ({ socialLinksClassName }) => {
	return (
		<ul className={socialLinksClassName}>
			{socialLinksData.map((item) => {
				return (
					<li className='social-links-item' key={item.linkId}>
						<a
							href={item.linkPath}
							className='social-links-link'
							aria-label={item.linkName}
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.linkIcon}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;
