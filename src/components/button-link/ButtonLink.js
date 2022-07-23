import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({ buttonLinkPath, buttonLinkClassName, buttonLinkName, ariaLabel }) => {
	return (
		<a
			href={buttonLinkPath}
			className={buttonLinkClassName}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={ariaLabel}
		>
			{buttonLinkName}
		</a>
	);
};

export default ButtonLink;
