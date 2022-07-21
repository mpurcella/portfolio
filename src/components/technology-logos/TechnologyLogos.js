import React from 'react';
import { technologyLogosData } from './TechnologyLogosData';
import './TechnologyLogos.scss';

const TechnologyLogos = () => {
	return (
		<ul className='technology-logos-list'>
			{technologyLogosData.map((item) => {
				return (
					<li className='technology-logos-item' key={item.technologyId}>
						{item.technologyLogo}
						<span className='technology-logos-tooltip'>{item.technologyName}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default TechnologyLogos;
