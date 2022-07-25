import React, { useEffect, useState } from 'react';
import Wrapper from '../../wrapper/Wrapper';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import { projectData } from '../../project/ProjectData';
import Project from '../../project/Project';
import './Work.scss';

const Work = ({ workRef }) => {
	// Sets state of true/false for window width
	const [width, setWidth] = useState(window.innerWidth > 575);

	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth > 575);
		};

		window.addEventListener('resize', handleWidth);

		return () => {
			window.removeEventListener('resize', handleWidth);
		};
	}, []);

	if (width) {
		return (
			<section id='work' ref={workRef}>
				<Wrapper>
					<SectionHeading sectionHeadingClassName='section-heading work-heading' sectionHeadingName='Work' />
					<SectionText sectionTextClassName='section-text work-text'>
						The projects featured below are just a snapshot of the skills and creativity that I feel best
						reflect my growth as&nbsp;a&nbsp;developer.
						<br />
						<br />
						This website will be forever evolving to document and showcase my journey. Check back
						occasionally to see where I have ended up and what I have&nbsp;created.
					</SectionText>
					<ul className='project-list'>
						{projectData.map((item) => {
							return (
								<li className='project-item' key={item.projectId}>
									<Project item={item} />
								</li>
							);
						})}
					</ul>
				</Wrapper>
			</section>
		);
	} else {
		return (
			<section id='work' ref={workRef}>
				<Wrapper>
					<SectionHeading sectionHeadingClassName='section-heading work-heading' sectionHeadingName='Work' />
					<SectionText sectionTextClassName='section-text work-text'>
						The projects featured below are just a snapshot of the skills and creativity that I feel best
						reflect my growth as&nbsp;a&nbsp;developer.
						<br />
						<br />
						This website will forever evolve to document and showcase my journey. Check back occasionally to
						see where I have ended up and what I have&nbsp;created.
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
	}
};

export default Work;
