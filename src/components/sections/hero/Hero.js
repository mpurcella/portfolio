import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import { heroData } from './HeroData';
import './Hero.scss';

const Hero = ({ heroRef }) => {
	return (
		<section id='hero' ref={heroRef}>
			<div className='hero-background'></div>
			<Wrapper>
				<h1 className='hero-heading'>
					<span className='hero-heading-top'>Mike</span>
					<span className='hero-heading-bottom'>Purcella</span>
				</h1>
				<ul className='hero-text-list'>
					{heroData.map((item) => {
						return (
							<li className='hero-text-item' key={item.textId}>
								{item.textValue}
							</li>
						);
					})}
				</ul>
			</Wrapper>
		</section>
	);
};

export default Hero;
