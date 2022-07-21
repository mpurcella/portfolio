import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import TechnologyLogos from '../../technology-logos/TechnologyLogos';
import './Technologies.scss';

const Technologies = ({ technologiesRef }) => {
	return (
		<section id='technologies' ref={technologiesRef}>
			<Wrapper>
				<SectionHeading
					sectionHeadingClassName='section-heading technologies-heading'
					sectionHeadingName='Technologies'
				/>
				<SectionText sectionTextClassName='section-text technologies-text'>
					My technology stack will surely change and take on a different shape as I grow as a developer, but
					below are some technologies that I currently utilize to make my ideas come&nbsp;to&nbsp;life.
				</SectionText>
				<TechnologyLogos />
			</Wrapper>
		</section>
	);
};

export default Technologies;
