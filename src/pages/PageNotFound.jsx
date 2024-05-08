import Navbar from '../components/Navbar';

const PageNotFound = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='card err-404-card'>
          <h1>Error 404</h1>
          <p>Page not found. Please use the above navigation menu.</p>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;