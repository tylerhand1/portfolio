import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <Footer />
    </>
  );
};

export default PageNotFound;