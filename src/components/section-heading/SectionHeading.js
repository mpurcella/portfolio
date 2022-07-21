import React from 'react';
import './SectionHeading.scss';

const SectionHeading = ({ sectionHeadingClassName, sectionHeadingName }) => {
	return <h2 className={sectionHeadingClassName}>{sectionHeadingName}</h2>;
};

export default SectionHeading;
