import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar isHome={true} />
      <main className="flex">
        <h1>Home</h1>
        <div className="card flex">
          <h2>About Me</h2>
          <ul>
            <li>Current student at CU Boulder</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;