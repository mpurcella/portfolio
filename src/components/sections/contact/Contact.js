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
				<SectionText sectionTextClassName='section-text contact-text'>
					Want to connect, collaborate, hire me, or learn more about what makes me...me?
					<br />
					<br />
					Just fill out the form below!
				</SectionText>
				<ContactForm />
			</Wrapper>
		</section>
	);
};

export default Contact;
