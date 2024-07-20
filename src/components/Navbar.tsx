import { Link } from 'react-router-dom';
import { NavBarProps } from '@/types';

const Navbar = ({ isHome, isEducation, isProjects }: NavBarProps) => {
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