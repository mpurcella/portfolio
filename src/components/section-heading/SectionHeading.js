import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.scss';

const SectionHeading = ({ sectionHeadingClassName, sectionHeadingName }) => {
	return (
		<motion.h2
			className={sectionHeadingClassName}
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
				amount: 0.4
			}}
		>
			{sectionHeadingName}
		</motion.h2>
	);
};

export default SectionHeading;
