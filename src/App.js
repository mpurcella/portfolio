import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './containers/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

const App = () => {
	const heroRef = useRef(null);
	const aboutRef = useRef(null);
	const technologiesRef = useRef(null);
	const workRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<div className='app'>
			<Router>
				<Navbar
					heroRef={heroRef}
					aboutRef={aboutRef}
					technologiesRef={technologiesRef}
					workRef={workRef}
					contactRef={contactRef}
				/>
				<Home
					heroRef={heroRef}
					aboutRef={aboutRef}
					technologiesRef={technologiesRef}
					workRef={workRef}
					contactRef={contactRef}
				/>
			</Router>
			<Footer />
		</div>
	);
};

export default App;
