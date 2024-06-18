// src/components/SocialIcons.js
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialIcons;
