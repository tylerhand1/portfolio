import Navbar from '../components/Navbar';

const Education = () => {
  return (
    <>
      <Navbar isEducation={true} />
      <main className="flex">
        <div className="card">
          <h1>Education</h1>
          <h2>University of Colorado Boulder</h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Expected graduation: May 2024</p>
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