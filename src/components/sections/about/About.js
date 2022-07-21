import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import aboutImage from '../../../images/portrait/portrait.jpeg';
import ButtonLink from '../../button-link/ButtonLink';
import './About.scss';

const About = ({ aboutRef }) => {
	return (
		<section id='about' ref={aboutRef}>
			<Wrapper>
				<SectionHeading sectionHeadingClassName='section-heading about-heading' sectionHeadingName='About' />
				<SectionText sectionTextClassName='section-text about-text'>
					I'm Mike, a Front-end Web Developer located in Portland, Oregon. My coding experience began long ago
					when I started "hacking" custom backgrounds and songs into my Myspace profile. It wasn't until later
					in life that I decided to pursue a career in it...
					<br />
					<br />
					Web development, that is.
					<br />
					<br />
					Now I'm focused on building products that&nbsp;bring true measurable results to&nbsp;end&nbsp;users.
					<br />
					<br />
					When I'm not working on new projects to strengthen my skills as a developer, you can find me
					scouring the web for music, binge-watching a new show, or embarrassing myself at a pool table.
					<br />
					<br />
					If you want to learn more about me, my experience, or my background, just follow the
					links&nbsp;below!
				</SectionText>
				<img src={aboutImage} className='about-image' alt='Michael Purcella Portrait' />
				<div className='about-button-link-container'>
					<ButtonLink
						buttonLinkClassName='button-link primary'
						buttonLinkPath='https://drive.google.com/file/d/1ENX8LcyLt7QkzG2x5HU_BemK1vdwG25D/view?usp=sharing'
						buttonLinkName='View My Resume'
					/>
				</div>
				<div className='about-button-link-container'>
					<ButtonLink
						buttonLinkClassName='button-link secondary'
						buttonLinkPath='https://github.com/mpurcella'
						buttonLinkName='View My Github'
					/>
				</div>
			</Wrapper>
		</section>
	);
};

export default About;
