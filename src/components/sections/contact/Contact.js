import React from 'react';
import ContactForm from '../../../containers/contact-form/ContactForm';
import SectionHeading from '../../section-heading/SectionHeading';
import SectionText from '../../section-text/SectionText';
import Wrapper from '../../wrapper/Wrapper';
import './Contact.scss';

const Contact = ({ contactRef }) => {
	return (
		<section id='contact' ref={contactRef}>
			<Wrapper>
				<SectionHeading
					sectionHeadingClassName='section-heading contact-heading'
					sectionHeadingName='Contact'
				/>
				<div className='contact-info'>
					<SectionText sectionTextClassName='section-text contact-text'>
						Want to connect, collaborate, hire me, or learn more about what makes me...me?
					</SectionText>
					<SectionText sectionTextClassName='section-text contact-text'>
						Just fill out the form below!
					</SectionText>
				</div>
				<ContactForm />
			</Wrapper>
		</section>
	);
};

export default Contact;
