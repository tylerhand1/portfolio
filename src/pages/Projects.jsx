import Navbar from '../components/Navbar';
import Project from '../components/Project';

const Projects = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column project-container-root'>
        <h1>Projects</h1>
        <div className='project-container grid'>
          <Project title={'Biology Lab Simulator'} info={'Collaborated with a team of six for BioFrontiers Institute'} />
          <Project title={'HackCU24 Sat-Track'} info={'Real-time satellite tracker'} />
          <Project title={'Proxy Web Server'} info={'A proxy web server written in C'} />
          <Project title={'Doodle Designer'} info={'A 2D web-based painter with image saving capabilities'} />
        </div>
      </main>
    </>
  );
};

export default Projects;