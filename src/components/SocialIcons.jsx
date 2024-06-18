// src/components/SocialIcons.js
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../styles/SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
		<a href="https://github.com/jmartinezgr" target="_blank" rel="noopener noreferrer">
			<FaGithub />
		</a>
		<a href="https://linkedin.com/in/juan-jose-martinez" target="_blank" rel="noopener noreferrer">
			<FaLinkedin />
		</a>
		<a href="https://wa.me/573147485623?text=Hola%21%20Estoy%20interesado%20en%20tu%20trabajo" target='_blank'>
			<FaWhatsapp />
		</a>
		<div className="vertical-line"></div>
    </div>
  );
};

export default SocialIcons;
