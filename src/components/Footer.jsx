import { Link } from 'react-router-dom';

import gitHubIcon from '../assets/technology-icons/GitHub.svg';
import linkedInIcon from '../assets/technology-icons/LinkedIn.svg';

const Footer = () => {
  return (
    <footer className='flex'>
      <Link
        to='https://github.com/tylerhand1'
        target='_blank'
      >
        <div className='tech-icon-container'>
          <p className='footer-icon-text'>Tyler&apos;s GitHub</p>
          <img src={gitHubIcon} className='tech-icon' />
        </div>
      </Link>
      <Link
        to='https://www.linkedin.com/in/tyler-hand1/'
        target='_blank'
      >
        <div className='tech-icon-container'>
          <p className='footer-icon-text'>Tyler&apos;s LinkedIn</p>
          <img src={linkedInIcon} className='tech-icon' />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;