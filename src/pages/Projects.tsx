import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Project from '@/components/Project';

const Projects = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <h1>Projects</h1>
        <div className='project-container grid'>
          <Project title={'Multiplayer Tic-Tac-Toe'} info={'A multiplayer web game built using the socket.IO library'} />
          <Project title={'Viable Virtual Lab'} info={'A virtual biology lab'} />
          <Project title={'HackCU10 Sat-Track'} info={'Real-time satellite tracker'} />
          <Project title={'Proxy Web Server'} info={'A proxy web server written in C'} />
          <Project title={'Doodle Designer'} info={'A 2D web-based painter with image saving capabilities'} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;