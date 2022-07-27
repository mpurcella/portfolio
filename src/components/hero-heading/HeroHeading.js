import React from 'react';
import { motion } from 'framer-motion';
import './HeroHeading.scss';

const HeroHeading = () => {
	return (
		<motion.h1
			className='hero-heading'
			initial={{
				opacity: 0,
				y: 20
			}}
			animate={{
				opacity: 1,
				y: 0
			}}
			transition={{
				duration: 0.5,
				ease: 'linear'
			}}
			viewport={{
				once: true
			}}
		>
			<span className='hero-heading-top'>Mike</span>
			<span className='hero-heading-bottom'>Purcella</span>
		</motion.h1>
	);
};

export default HeroHeading;
