import React from 'react';
import { motion } from 'framer-motion';
import { heroTextData } from './HeroTextData';
import './HeroText.scss';

const HeroText = () => {
	return (
		<motion.ul
			className='hero-text-list'
			initial={{
				opacity: 0,
				y: 20
			}}
			animate={{
				opacity: 1,
				y: 0
			}}
			transition={{
				duration: 0.4,
				delay: 0.5,
				ease: 'linear'
			}}
			viewport={{
				once: true
			}}
		>
			{heroTextData.map((item) => {
				return (
					<li className='hero-text-item' key={item.textId}>
						{item.textValue}
					</li>
				);
			})}
		</motion.ul>
	);
};

export default HeroText;
