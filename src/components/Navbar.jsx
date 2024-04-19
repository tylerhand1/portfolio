import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ isHome, isEducation, isProjects }) => {
  return (
    <>
      <header className='flex'>
        <ul className='flex'>
          <li className={isHome ? 'flex selected' : 'flex'}>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </li>
          <li className={isEducation ? 'flex selected' : 'flex'}>
            <Link to='/education'>
              <p>Education</p>
            </Link>
          </li>
          <li className={isProjects ? 'flex selected' : 'flex'}>
            <Link to='/projects'>
              <p>Projects</p>
            </Link>
          </li>
        </ul>
        
      </header>
    </>
  );
};

Navbar.propTypes = {
  isHome: PropTypes.boolean,
  isEducation: PropTypes.boolean,
  isProjects: PropTypes.boolean,
};

export default Navbar;