import React from 'react'
import { FooterContainer, SocialIcons } from './style';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
      <FooterContainer>
        <h3>Connect with us:</h3>
        <SocialIcons>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="white" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="white" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color="white" />
          </a>
        </SocialIcons>
      </FooterContainer>
    );
  };
  
  export default Footer;