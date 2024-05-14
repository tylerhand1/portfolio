import Navbar from '../../components/Navbar';

// Images
import projectImage from '../../assets/projects/DoodleDesigner/doodle_designer.png';

// Tech icons
import cssIcon from '../../assets/technology-icons/CSS3.svg';
import gitIcon from '../../assets/technology-icons/Git.svg';
import htmlIcon from '../../assets/technology-icons/HTML5.svg';
import jsIcon from '../../assets/technology-icons/JavaScript.svg';
import mysqlIcon from '../../assets/technology-icons/MySQL.svg';
import phpIcon from '../../assets/technology-icons/PHP.svg';

const techData = [
  {
    id: 0,
    icon: htmlIcon,
    name: 'HTML5 Icon',
  },
  {
    id: 1,
    icon: cssIcon,
    name: 'CSS3 Icon',
  },
  {
    id: 2,
    icon: jsIcon,
    name: 'JavaScript Icon',
  },
  {
    id: 3,
    icon: phpIcon,
    name: 'PHP Icon',
  },
  {
    id: 4,
    icon: mysqlIcon,
    name: 'MySQL Icon',
  },
  {
    id: 5,
    icon: gitIcon,
    name: 'Git Icon',
  },
];

const DoodleDesigner = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='flex flex-column project-page-container'>
          <h1>Doodle Designer</h1>
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

export default DoodleDesigner;