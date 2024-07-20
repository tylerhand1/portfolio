import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Images
import projectImage from '@/assets/projects/DoodleDesigner/doodle_designer.png';

// Tech icons
import cssIcon from '@/assets/technology-icons/CSS3.svg';
import gitIcon from '@/assets/technology-icons/Git.svg';
import htmlIcon from '@/assets/technology-icons/HTML5.svg';
import jsIcon from '@/assets/technology-icons/JavaScript.svg';
import mysqlIcon from '@/assets/technology-icons/MySQL.svg';
import phpIcon from '@/assets/technology-icons/PHP.svg';

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
            <img className='project-page-media' src={projectImage} alt='Screenshot of Gel Electrophoresis module' />
            <div className='flex flex-column project-text project-text-side'>
              <p>Doodle Designer provides users with the ability to create and save drawings on the web using a vanilla frontend and PHP backend.</p>
              <p>It also requires a user to sign up or login to save, edit, or delete their drawings to provide security to their creations.</p>
              <p>There is also an export option to allow users to save to their local storage.</p>
            </div>
          </div>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong>Sign up/Login: </strong>
                    Users are able to create an account, requiring only a name, email, username and password. They are also able to sign in with their credentials and perform user-specific operations like changing password.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Create drawings: </strong>
                    Users can create drawings with a color picker and eraser to make fun and interesting doodles. There are options to export and save their drawings so they can work on them offline or save their work.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Edit drawings: </strong>
                    They can also go back to old drawings and edit and save them.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Delete drawings: </strong>
                    If they no longer like the drawing or wish to get rid of it, they are able to delete their drawing.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Search drawings: </strong>
                    Users can also search for other drawings that they or others have created.
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
      <Footer />
    </>
  );
};

export default DoodleDesigner;