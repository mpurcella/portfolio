import React from 'react';
import { technologyLogosData } from './TechnologyLogosData';
import './TechnologyLogos.scss';

const TechnologyLogos = () => {
	return (
		<ul className='technology-logos-list'>
			{technologyLogosData.map((item) => {
				return (
					<li className='technology-logos-item' key={item.technologyId}>
						<span className={`technology-logos-logo ${item.technologyLogoClassName}`}>
							{item.technologyLogo}
						</span>
						<span className='technology-logos-name'>{item.technologyName}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default TechnologyLogos;
