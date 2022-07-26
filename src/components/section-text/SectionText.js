import React from 'react';
import { motion } from 'framer-motion';
import './SectionText.scss';

const SectionText = ({ sectionTextClassName, children }) => {
	return (
		<motion.p
			className={sectionTextClassName}
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
			{children}
		</motion.p>
	);
};

export default SectionText;
