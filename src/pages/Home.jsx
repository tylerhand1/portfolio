import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar isHome={true} />
      <main className='flex'>
        <div className='card home-card'>
          <h1>About Me</h1>
          <div className="grid home-card-sections-container">
            <div className="home-card-section">
              <h2>My Experience</h2>
              {/* TODO: Add experience into this section */}
            </div>
            <div className="home-card-section">
              <h2>Technologies</h2>
              {/* TODO: Add svg icons for each technology I wish to list */}
            </div>
            <div className="home-card-section">
              <h2>Interests</h2>
              {/* Add interests in, possibly in ul format */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;