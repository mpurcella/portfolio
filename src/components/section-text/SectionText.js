import React from 'react';
import './SectionText.scss';

const SectionText = ({ sectionTextClassName, children }) => {
	return <p className={sectionTextClassName}>{children}</p>;
};

export default SectionText;
