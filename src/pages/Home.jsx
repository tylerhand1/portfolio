import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar isHome={true} />
      <main className="flex">
        <div className="card">
          <h1>About Me</h1>
          <p>I am a computer science student.</p>
        </div>
      </main>
    </>
  );
};

export default Home;