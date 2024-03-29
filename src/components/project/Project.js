import React from 'react';
import ButtonLink from '../button-link/ButtonLink';
import './Project.scss';
import ProjectText from '../project-text/ProjectText';

const Project = ({ item }) => {
	return (
		<div className='project'>
			<h3 className='project-name'>{item.projectName}</h3>
			<div className='project-body'>
				<img src={item.projectImage} className='project-image' alt={item.projectAlt} />
				<div className='project-info'>
					<div className='project-description'>
						<ProjectText>{item.projectDescription}</ProjectText>
						<ProjectText>{item.projectInspiration}</ProjectText>
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
				</div>
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
		</div>
	);
};

export default Project;
