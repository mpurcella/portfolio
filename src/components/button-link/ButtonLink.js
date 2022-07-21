import React from 'react';
import './ButtonLink.scss';

const ButtonLink = ({ buttonLinkPath, buttonLinkClassName, buttonLinkName }) => {
	return (
		<a href={buttonLinkPath} className={buttonLinkClassName} target='_blank' rel='noopener noreferrer'>
			{buttonLinkName}
		</a>
	);
};

export default ButtonLink;
