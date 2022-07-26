import React from 'react';
import { motion } from 'framer-motion';
import { heroTextData } from './HeroTextData';
import './HeroText.scss';

const HeroText = () => {
	return (
		<motion.ul
			className='hero-text-list'
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			transition={{
				duration: 0.6,
				ease: 'linear'
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
