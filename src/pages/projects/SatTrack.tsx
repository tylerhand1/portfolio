import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Images
import projectImage from '@/assets/projects/HackCU10/sat_track.png';

// Tech icons
import cssIcon from '@/assets/technology-icons/CSS3.svg';
import expressIcon from '@/assets/technology-icons/Express.svg';
import gitIcon from '@/assets/technology-icons/Git.svg';
import htmlIcon from '@/assets/technology-icons/HTML5.svg';
import nodeIcon from '@/assets/technology-icons/Nodejs.svg';
import psqlIcon from '@/assets/technology-icons/PostgreSQL.svg';
import reactIcon from '@/assets/technology-icons/React.svg';
import tsIcon from '@/assets/technology-icons/TypeScript.svg';

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
    id: 3,
    icon: reactIcon,
    name: 'ReactJS Icon',
  },
  {
    id: 4,
    icon: tsIcon,
    name: 'TypeScript Icon',
  },
  {
    id: 5,
    icon: nodeIcon,
    name: 'Node.js Icon',
  },
  {
    id: 6,
    icon: expressIcon,
    name: 'Express Icon',
  },
  {
    id: 7,
    icon: psqlIcon,
    name: 'PostgreSQL Icon'
  },
  {
    id: 8,
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
              <h2>Introduction</h2>
              <p>Sat-Track is designed to provide tracking and information of satellites orbiting Earth in real time. This facilitates finding necessary telemtry data about any satellite Sat-Track has.</p>
              <p>My team of three built this within 24 hours for the HackCU10 hackathon!</p>
            </div>
          </div>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong>Default Satellite Info: </strong>
                    Sat-Track, upon visiting for the first time, displays telemetry data about several well-known satellites in low orbit, including the ISS and the Hubble Space Telescope!
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Satellite Search: </strong>
                    Sat-Track also comes included with the ability to obtain information about other satellites orbiting Earth. Perfect for the space enthusiast!
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Real-Time Updates: </strong>
                    Sat-Track provides real-time updates about satellites listed in the display, perfect for those wishing to spot these orbiting wonders!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <h2>Technologies Used</h2>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <h3>Frontend</h3>
              <p>The frontend was built using React and TypeScript.</p>
              <h3>Backend</h3>
              <p>The backend utilized an Express REST API to handle requests from the frontend, a PostgreSQL database and API calls to n2yo.com to obtain satellite information.</p>
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
      <Footer />
    </>
  );
};

export default SatTrack;