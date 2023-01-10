import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Wrapper from '../../wrapper/Wrapper';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import aboutImage from '../../../images/portrait/portrait.jpeg';
import ButtonLink from '../../button-link/ButtonLink';
import resume from '../../../resume/michael_purcella_resume.pdf';
import './About.scss';

const About = ({ aboutRef }) => {
	const [width, setWidth] = useState(window.innerWidth > 991);

	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth > 991);
		};

		window.addEventListener('resize', handleWidth);

		return () => {
			window.removeEventListener('resize', handleWidth);
		};
	}, []);

	const aboutVariantSmall = {
		offScreen: {
			opacity: 0,
			y: 30
		},
		onScreen: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: 'linear'
			}
		}
	};

	const aboutVariantLarge = {
		offScreen: {
			opacity: 1,
			y: 0
		},
		onScreen: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: 'linear'
			}
		}
	};

	return (
		<section id='about' ref={aboutRef}>
			<Wrapper>
				<SectionHeading sectionHeadingClassName='section-heading about-heading' sectionHeadingName='About' />
				<div className='about-info-container'>
					<div className='about-info'>
						<SectionText sectionTextClassName='section-text about-text'>
							I'm Mike, a Front-end Web Developer located in the Rose City (Portland, Oregon). My coding
							experience began long ago when I started "hacking" custom backgrounds and songs into my
							Myspace profile. It wasn't until later in life that I decided to pursue a career in it...Web
							development, that&nbsp;is.
						</SectionText>
						<SectionText sectionTextClassName='section-text about-text'>
							Now I'm focused on building products that&nbsp;bring true measurable results
							to&nbsp;end&nbsp;users.
						</SectionText>
						<SectionText sectionTextClassName='section-text about-text'>
							When I'm not working on new projects to strengthen my skills as a developer, you can find me
							scouring the web for music, binge-watching a new show, or embarrassing myself at a
							pool&nbsp;table.
						</SectionText>
						<SectionText sectionTextClassName='section-text about-text'>
							If you want to learn more about me, my experience, or my background, just follow the
							links&nbsp;below!
						</SectionText>
					</div>
					<motion.div
						className='about-image-container'
						initial='offScreen'
						whileInView='onScreen'
						viewport={{
							once: true,
							amount: 0.1
						}}
						variants={width ? aboutVariantLarge : aboutVariantSmall}
					>
						<img src={aboutImage} className='about-image' alt='Michael Purcella Portrait' />
					</motion.div>
				</div>
				<motion.div
					className='about-buttons-container'
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
					<ButtonLink
						buttonLinkClassName='button-link primary'
						buttonLinkPath={resume}
						buttonLinkName='View My Resume'
					/>
					<ButtonLink
						buttonLinkClassName='button-link secondary'
						buttonLinkPath='https://github.com/mpurcella'
						buttonLinkName='View My Github'
					/>
				</motion.div>
			</Wrapper>
		</section>
	);
};

export default About;
