import HeartLine from '../../images/projects/heart-line.jpeg';
import JukeboxMonkeyRecords from '../../images/projects/jukebox-monkey-records.jpeg';
import ThePopcornPlace from '../../images/projects/the-popcorn-place.jpeg';
import McuGuide from '../../images/projects/mcu-guide.jpeg';
import {
	SiHtml5,
	SiSass,
	SiTailwindcss,
	SiBootstrap,
	SiJavascript,
	SiTypescript,
	SiJquery,
	SiReact
} from 'react-icons/si';

const projectData = [
	{
		projectName: 'MCU Guide',
		projectImage: McuGuide,
		projectAlt: 'MCU Guide Website Home Page',
		projectDescription:
			'This project was created to explore making API calls, manipulating the returned API data, implementing dynamic routing, and utilizing TypeScript to set data types.',
		projectInspiration:
			'Expanding upon a previous project, The Popcorn Place, this website builds off of the use of REST APIs, type setting, and styling via Tailwind CSS. Combining my interests in the MCU and web development, I continue progressing as a front-end web developer.',
		projectTechnologies: [
			{
				projectTechnologyLogo: <SiReact />,
				projectTechnologyClassName: 'react-logo',
				projectTechnologyId: 1
			},
			{
				projectTechnologyLogo: <SiTypescript />,
				projectTechnologyClassName: 'typescript-logo',
				projectTechnologyId: 2
			},
			{
				projectTechnologyLogo: <SiTailwindcss />,
				projectTechnologyClassName: 'tailwind-logo',
				projectTechnologyId: 3
			}
		],
		projectPathSite: 'https://mcu-guide.netlify.app',
		projectPathGithub: 'https://github.com/mpurcella/mcu-guide',
		projectId: 1
	},
	{
		projectName: 'The Popcorn Place',
		projectImage: ThePopcornPlace,
		projectAlt: 'The Popcorn Place Website Home Page',
		projectDescription:
			'This project was created to gain experience collaborating with a team of web developers, strengthen UI Development skills, make API requests, and manipulate API data.',
		projectInspiration:
			'My goal has been to learn, grow, and become a better developer with each passing day. This website provided me the opportunity to practice and implement previously unknown or unfamiliar concepts and ideas that I will be able to use and expand upon throughout my career.',
		projectTechnologies: [
			{
				projectTechnologyLogo: <SiReact />,
				projectTechnologyClassName: 'react-logo',
				projectTechnologyId: 1
			},
			{
				projectTechnologyLogo: <SiTypescript />,
				projectTechnologyClassName: 'typescript-logo',
				projectTechnologyId: 2
			},
			{
				projectTechnologyLogo: <SiTailwindcss />,
				projectTechnologyClassName: 'tailwind-logo',
				projectTechnologyId: 3
			}
		],
		projectPathSite: 'https://the-popcorn-place.netlify.app/',
		projectPathGithub: 'https://github.com/mpurcella/apprenticeship-movies-app',
		projectId: 2
	},
	{
		projectName: 'Heart Line',
		projectImage: HeartLine,
		projectAlt: 'Heart Line Website Home Page',
		projectDescription:
			'This project was created to gain experience working with React and to explore its many features and subtleties, including initializing and setting states, passing props, utilizing hooks, and creating a routing system and easily navigable website.',
		projectInspiration:
			'As a musician, I have always dreamed of writing, recording, and releasing an album. That dream was the inspiration for this website. Maybe one day that dream will become a reality',
		projectTechnologies: [
			{
				projectTechnologyLogo: <SiReact />,
				projectTechnologyClassName: 'react-logo',
				projectTechnologyId: 1
			},
			{
				projectTechnologyLogo: <SiSass />,
				projectTechnologyClassName: 'sass-logo',
				projectTechnologyId: 2
			}
		],
		projectPathSite: 'https://mpurcella.github.io/artist-page-v2-react/',
		projectPathGithub: 'https://github.com/mpurcella/artist-page-v2-react',
		projectId: 3
	},
	{
		projectName: 'Jukebox Monkey Records',
		projectImage: JukeboxMonkeyRecords,
		projectAlt: 'Jukebox Monkey Records Website Home Page',
		projectDescription:
			'This project was created to utilize the various layouts, components, forms, and utilities that Bootstrap provides to develop a fully responsive and user-friendly website. To emulate e-commerce functionality, users can view, add, and remove products from their cart through the use of DOM manipulation',
		projectInspiration:
			'Music is one of the biggest passions in my life, and I wanted to celebrate that by making a website to showcase artists and their work.',
		projectTechnologies: [
			{
				projectTechnologyLogo: <SiHtml5 />,
				projectTechnologyClassName: 'html-logo',
				projectTechnologyId: 1
			},
			{
				projectTechnologyLogo: <SiBootstrap />,
				projectTechnologyClassName: 'bootstrap-logo',
				projectTechnologyId: 2
			},
			{
				projectTechnologyLogo: <SiSass />,
				projectTechnologyClassName: 'sass-logo',
				projectTechnologyId: 3
			},
			{
				projectTechnologyLogo: <SiJavascript />,
				projectTechnologyClassName: 'javascript-logo',
				projectTechnologyId: 4
			},
			{
				projectTechnologyLogo: <SiJquery />,
				projectTechnologyClassName: 'jquery-logo',
				projectTechnologyId: 5
			}
		],
		projectPathSite: 'https://mpurcella.github.io/jukebox-monkey-records/',
		projectPathGithub: 'https://github.com/mpurcella/jukebox-monkey-records',
		projectId: 4
	}
];

export { projectData };
