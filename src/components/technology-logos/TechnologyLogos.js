import React from 'react';
import { motion } from 'framer-motion';
import { technologyLogosData } from './TechnologyLogosData';
import './TechnologyLogos.scss';

const TechnologyLogos = () => {
	return (
		<ul className='technology-logos-list'>
			{technologyLogosData.map((item, i) => {
				return (
					<motion.li
						className='technology-logos-item'
						key={item.technologyId}
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
						<span className={`technology-logos-logo ${item.technologyLogoClassName}`}>
							{item.technologyLogo}
						</span>
						<span className='technology-logos-name'>{item.technologyName}</span>
					</motion.li>
				);
			})}
		</ul>
	);
};

export default TechnologyLogos;
