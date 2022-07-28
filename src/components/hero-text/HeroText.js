import React from 'react';
import { heroTextData } from './HeroTextData';
import './HeroText.scss';

const HeroText = () => {
	return (
		<ul className='hero-text-list'>
			{heroTextData.map((item) => {
				return (
					<li className='hero-text-item' key={item.textId}>
						{item.textValue}
					</li>
				);
			})}
		</ul>
	);
};

export default HeroText;
