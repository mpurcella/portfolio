import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import ButtonLink from '../button-link/ButtonLink';
import './Project.scss';

const Project = ({ item }) => {
	return (
		<div className='project'>
			<Wrapper>
				<h3 className='project-name'>{item.projectName}</h3>
			</Wrapper>
			<img src={item.projectImage} className='project-image' alt={item.projectAlt} />
			<Wrapper>
				<div className='project-description'>
					<p className='project-text'>
						{item.projectDescription}
						<br />
						<br />
						{item.projectInspiration}
					</p>
					<ul className='project-technology-list'>
						{item.projectTechnologies.map((item) => {
							return (
								<li className='project-technology-item' key={item.projectTechnologyId}>
									<span className={`project-technology-logo ${item.projectTechnologyClassName}`}>
										{item.projectTechnologyLogo}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='project-button-link-container'>
					<ButtonLink
						buttonLinkClassName='button-link primary'
						buttonLinkPath={item.projectPathSite}
						buttonLinkName='View Site'
					/>
					<ButtonLink
						buttonLinkClassName='button-link secondary'
						buttonLinkPath={item.projectPathGithub}
						buttonLinkName='View Code'
					/>
				</div>
			</Wrapper>
		</div>
	);
};

export default Project;
