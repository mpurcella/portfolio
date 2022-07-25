import HeartLine from '../../images/projects/heart-line.jpeg';
import JukeboxMonkeyRecords from '../../images/projects/jukebox-monkey-records.jpeg';
import { SiHtml5, SiSass, SiBootstrap, SiJavascript, SiJquery, SiReact } from 'react-icons/si';

const projectData = [
	{
		projectName: 'Heart Line',
		projectImage: HeartLine,
		projectAlt: 'Heart Line Website Home Page',
		projectDescription:
			'This project was created to gain experience working with React and to explore its many features and subtleties, including initializing and setting states, passing props, utilizing hooks, and creating a dynamic routing system and easily navigable website.',
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
		projectId: 1
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
		projectId: 2
	}
];

export { projectData };
