import Navbar from '../../components/Navbar';

// Images
import projectImage from '../../assets/projects/BioLabSim/gel_electrophoresis.png';

const BioLabSim = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex'>
        <div className="project-page-container">
          <h1>Biology Lab Simulator Framework</h1>
          <div className="flex project-page-section">
            <img className='project-page-img' src={projectImage} alt='Screenshot of Gel Electrophoresis module' />
            <div className="flex project-text">
              <p>This biology lab simulation framework is designed to provide a necessary lab experience and learning to students who may not have the same opportunities more wealthy students.</p>
              <p>The first module, the gel electrophoresis lab, is a realistic simulation of a lab a typical first-year biology student does.</p>
              <p>The goal of this project is to allow students to make mistakes. Unlike other lab simulations that are more rail roaded, this one logs your mistakes and informs the user at the end of the simulation. It also simulates the most common mistakes a student can make!</p>
            </div>
          </div>
          <div className="flex project-page-section">
            {/* TODO: Add project features */}
          </div>
          <div className="flex project-page-section">
            {/* TODO: Add project technologies used */}
          </div>
        </div>
      </main>
    </>
  );
};

export default BioLabSim;