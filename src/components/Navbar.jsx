/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

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

export default Navbar;