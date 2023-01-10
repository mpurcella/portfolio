import React from 'react';
import { motion } from 'framer-motion';
import ButtonLink from '../button-link/ButtonLink';
import './Project.scss';
import ProjectText from '../project-text/ProjectText';

const Project = ({ item }) => {
	return (
		<motion.div
			className='project'
			initial={{
				opacity: 0,
				y: 30
			}}
			whileInView={{
				opacity: 1,
				y: 0
			}}
			transition={{
				duration: 0.4,
				ease: 'linear'
			}}
			viewport={{
				once: true,
				amount: 0.2
			}}
		>
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
			<motion.div
				className='project-button-link-container'
				initial={{
					opacity: 0,
					y: 30
				}}
				whileInView={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.4,
					ease: 'linear'
				}}
				viewport={{
					once: true,
					amount: 0.2
				}}
			>
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
			</motion.div>
		</motion.div>
	);
};

export default Project;
