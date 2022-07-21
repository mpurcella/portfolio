import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import './Work.scss';
import { projectData } from '../../project/ProjectData';
import Project from '../../project/Project';

const Work = ({ workRef }) => {
	return (
		<section id='work' ref={workRef}>
			<Wrapper>
				<SectionHeading sectionHeadingClassName='section-heading work-heading' sectionHeadingName='Work' />
				<SectionText sectionTextClassName='section-text work-text'>
					The projects featured below are just a snapshot of the skills and creativity that I feel best
					reflect my growth as a&nbsp;developer.
					<br />
					<br />
					This website will be forever evolving to document and showcase my journey. Check back occasionally
					to see where I have ended up and what I have created.
				</SectionText>
			</Wrapper>
			<ul className='project-list'>
				{projectData.map((item) => {
					return (
						<li className='project-item' key={item.projectId}>
							<Project item={item} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Work;
