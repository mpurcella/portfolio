import React from 'react';
import { motion } from 'framer-motion';
import './HeroHeading.scss';

const HeroHeading = () => {
	return (
		<motion.h1
			className='hero-heading'
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
			<span className='hero-heading-top'>Mike</span>
			<span className='hero-heading-bottom'>Purcella</span>
		</motion.h1>
	);
};

export default HeroHeading;
