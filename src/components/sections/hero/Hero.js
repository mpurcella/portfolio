import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import HeroHeading from '../../hero-heading/HeroHeading';
import HeroSubheading from '../../hero-subheading/HeroSubheading';
import HeroText from '../../hero-text/HeroText';
import './Hero.scss';

const Hero = ({ heroRef }) => {
	return (
		<section id='hero' ref={heroRef}>
			<Wrapper>
				<HeroHeading />
				<HeroSubheading />
				<HeroText />
			</Wrapper>
		</section>
	);
};

export default Hero;
