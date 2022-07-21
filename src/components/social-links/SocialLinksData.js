import { FaGithub, FaLinkedinIn, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const socialLinksData = [
	{
		linkName: 'Github',
		linkIcon: <FaGithub />,
		linkPath: 'https://github.com/mpurcella',
		linkId: 1
	},
	{
		linkName: 'LinkedIn',
		linkIcon: <FaLinkedinIn />,
		linkPath: 'https://www.linkedin.com/in/mpurcella/',
		linkId: 2
	},
	{
		linkName: 'Instagram',
		linkIcon: <FaInstagram />,
		linkPath: 'https://www.instagram.com/mpurcella',
		linkId: 3
	},
	{
		linkName: 'Email',
		linkIcon: <FaRegEnvelope />,
		linkPath: 'mailto:mjpurcella@gmail.com',
		linkId: 4
	}
];

export { socialLinksData };
