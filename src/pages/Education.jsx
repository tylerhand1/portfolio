import Navbar from '../components/Navbar';

import CULogo from '../assets/education/cu_logo.svg';

const Education = () => {
  return (
    <>
      <Navbar isEducation={true} />
      <main className='flex'>
        <div className='card education-card'>
          <h1>Education</h1>
          <div className='education-title-container'>
            <div className='education-title-text-container'>
              <h2>University of Colorado Boulder</h2>
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Expected graduation: May 2024</h4>
            </div>
            <div className='education-title-logo-container'>
              <img src={CULogo} className='cu-logo' />
            </div>
          </div>
          
          <p>Prior to starting my education journey at CU Boulder, I was always interested in programming
            and web development. Because of this passion, I chose to pursue a Bachelor&apos;s of Science 
            in computer science.
          </p>
          <p>At CU Boulder, I have taken classes in a variety of topics within the field of computer science.
            Including, but not limited to, data structures and algorithms, operating systems, network systems,
            ethical hacking, and software engineering.
          </p>
        </div>
      </main>
    </>
  );
};

export default Education;