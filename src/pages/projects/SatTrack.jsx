import Navbar from '../../components/Navbar';

// Images
import projectImage from '../../assets/projects/HackCU10/sat_track.png';

// Tech icons
import cssIcon from '../../assets/technology-icons/CSS3.svg';
import expressIcon from '../../assets/technology-icons/Express.svg';
import gitIcon from '../../assets/technology-icons/Git.svg';
import htmlIcon from '../../assets/technology-icons/HTML5.svg';
import nodeIcon from '../../assets/technology-icons/Nodejs.svg';
import psqlIcon from '../../assets/technology-icons/PostgreSQL.svg';
import reactIcon from '../../assets/technology-icons/React.svg';

const techData = [
  {
    id: 0,
    icon: htmlIcon,
    name: 'HTML5 Icon',
  },
  {
    id: 1,
    icon: cssIcon,
    name: 'CSS5 Icon',
  },
  {
    id: 3,
    icon: reactIcon,
    name: 'ReactJS Icon',
  },
  {
    id: 4,
    icon: nodeIcon,
    name: 'Node.js Icon',
  },
  {
    id: 5,
    icon: expressIcon,
    name: 'Express Icon',
  },
  {
    id: 6,
    icon: psqlIcon,
    name: 'PostgreSQL Icon'
  },
  {
    id: 7,
    icon: gitIcon,
    name: 'Git Icon',
  },
];

const SatTrack = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='flex flex-column project-page-container'>
          <h1>HackCU10 Sat-Track</h1>
          <div className='flex project-page-section'>
            <img className='project-page-img' src={projectImage} alt='Screenshot of Gel Electrophoresis module' />
            <div className='flex flex-column project-text project-text-side'>
              <p></p>
            </div>
          </div>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong></strong>
                    
                  </span>
                </li>
                <li>
                  <span>
                    <strong></strong>
                    
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <h2>Technologies Used</h2>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <p></p>
            </div>
            <div className='project-tech-icons-container'>
              <div className='flex tech-icons-container'>
                {techData.map(tech => {
                  return (
                    <div key={tech.id} className='flex flex-column tech-icon-container'>
                      <p className='tech-icon-label'>{tech.name.replace('Icon', '')}</p>
                      <img key={tech.id} className='tech-icon' src={tech.icon} alt={tech.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SatTrack;