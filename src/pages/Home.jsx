import Navbar from '../components/Navbar';

// Technology icons
import cIcon from '../assets/technology-icons/C.svg';
import cssIcon from '../assets/technology-icons/CSS3.svg';
import gitIcon from '../assets/technology-icons/Git.svg';
import godotIcon from '../assets/technology-icons/GodotEngine.svg';
import htmlIcon from '../assets/technology-icons/HTML5.svg';
import jsIcon from '../assets/technology-icons/JavaScript.svg';
import mysqlIcon from '../assets/technology-icons/MySQL.svg';
import nodeIcon from '../assets/technology-icons/Nodejs.svg';
import pythonIcon from '../assets/technology-icons/Python.svg';
import reactIcon from '../assets/technology-icons/React.svg';

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
    id: 2,
    icon: jsIcon,
    name: 'JavaScript Icon',
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
    icon: mysqlIcon,
    name: 'MySQL Icon',
  },
  {
    id: 6,
    icon: gitIcon,
    name: 'Git Icon',
  },
  {
    id: 7,
    icon: godotIcon,
    name: 'Godot Icon',
  },
  {
    id: 8,
    icon: pythonIcon,
    name: 'Python Icon',
  },
  {
    id: 9,
    icon: cIcon,
    name: 'C Icon',
  },
];

const Home = () => {
  return (
    <>
      <Navbar isHome={true} />
      <main className='flex flex-column'>
        <div className='card home-card'>
          <h1>About Me</h1>
          <div className='home-card-sections-container'>
            <div className='home-card-section'>
              <h2>My Experience</h2>
              <p>
                As someone who is enticed by learning and taking on new challenges, I am a full stack developer with a relentless interest to continue learning more about React, JavaScript, and Node.js. 
              </p>
              <p>
                I have one year of experience collaborating with a team of six and communicating with the client and education team to design and build a biology lab simulator framework in Godot and GDScript.
              </p>
            </div>
            <div className='home-card-section'>
              <h2>Technologies</h2>
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
            <div className='home-card-section'>
              <h2>Interests</h2>
              <p>
                Outside of software development, I enjoy spending my time learning and using German, Japanese and Czech as well as reading and exploring new interests.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;