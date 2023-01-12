import React from 'react';
import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/hero/Hero';
import Technologies from '../components/sections/technologies/Technologies';
import Work from '../components/sections/work/Work';

const Home = ({ heroRef, aboutRef, technologiesRef, workRef, contactRef }) => {
	return (
		<main className='main'>
			<Hero heroRef={heroRef} />
			<About aboutRef={aboutRef} />
			<Technologies technologiesRef={technologiesRef} />
			<Work workRef={workRef} />
			<Contact contactRef={contactRef} />
		</main>
	);
};

export default Home;
