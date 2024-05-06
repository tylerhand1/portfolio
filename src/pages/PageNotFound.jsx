import Navbar from '../components/Navbar';

const PageNotFound = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex project-container-root'>
        <h1>Error 404</h1>
      </main>
    </>
  );
};

export default PageNotFound;