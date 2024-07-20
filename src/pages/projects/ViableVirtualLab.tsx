import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Images
import projectImage from '@/assets/projects/ViableVirtualLab/gel_electrophoresis.png';

// Tech icons
import godotIcon from '@/assets/technology-icons/GodotEngine.svg';
import gitIcon from '@/assets/technology-icons/Git.svg';

const techData = [
  {
    id: 0,
    icon: gitIcon,
    name: 'Git Icon',
  },
  {
    id: 1,
    icon: godotIcon,
    name: 'Godot Icon',
  },
];

const ViableVirtualLab = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='flex flex-column project-page-container'>
          <h1>Viable Virtual Lab</h1>
          <div className='flex project-page-section'>
            <img className='project-page-img' src={projectImage} alt='Screenshot of Gel Electrophoresis module' />
            <div className='flex flex-column project-text project-text-side'>
              <p>This biology lab simulation framework is designed to provide a necessary lab experience and learning to students who may not have the same opportunities more wealthy students.</p>
              <p>The first module, the gel electrophoresis lab, is a realistic simulation of a lab a typical first-year biology student does.</p>
              <p>The goal of this project is to allow students to make mistakes. Unlike other lab simulations that are more rail roaded, this one logs your mistakes and informs the user at the end of the simulation. It also simulates the most common mistakes a student can make!</p>
            </div>
          </div>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong>Base lab object: </strong>
                    The project utilizes a base lab object to provide basic interactions and abilities shared among all lab objects. It provides the ability for the simulation to be expanded to further lab experiments that require instruments or machines that are not implemented.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Error logging: </strong>
                    The biology virtual lab provides a means to log user actions with three levels of distinction, which includes basic log info, warnings and errors. This allows the user to easily see their mistakes and how severe they are.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <h2>Technologies Used</h2>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <p>Our team used git branches to implement each individual object to faciliate version control.</p>
              <p>This project uses Godot version 3.5.3 as the game engine and GDScript to implement the necessary logic of the biology lab simulation.</p>
              <p>To run the simulation on the web, our team used Godot&apos;s HTML5 export and GitHub Pages for deployment.</p>
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

export default ViableVirtualLab;