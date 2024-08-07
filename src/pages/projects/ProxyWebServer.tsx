import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Tech icons
import cIcon from '@/assets/technology-icons/C.svg';
import gitIcon from '@/assets/technology-icons/Git.svg';

const techData = [
  {
    id: 0,
    icon: cIcon,
    name: 'C Icon',
  },
  {
    id: 1,
    icon: gitIcon,
    name: 'Git Icon',
  },
];

const ProxyWebServer = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='flex flex-column project-page-container'>
          <h1>Proxy Web Server</h1>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <p>This proxy web server was written in C to apply what I learned about proxy servers as well as further my experience in socket programming.</p>
              <p>I also learned how to implement the libcurl API to faciliate traffic between the server, the client and the Internet.</p>
            </div>
          </div>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong>Caching: </strong>
                    The proxy server uses a user-defined timeout to determine whether content the proxy server deems cacheable is stale or not. If it is not, it serves the cached version to reduce network traffic and increase response time for the user.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Blocking websites: </strong>
                    This server also provides the ability to easily add websites through URLs or IP address to prevent users from accessing content.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <h2>Technologies Used</h2>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <p></p>
            </div>
            <div className='project-tech-icons-container'>
              <div className='flex tech-icons-container'>
                {techData.map(tech => {
                  return (
                    <div key={tech.id} className='flex flex-column tech-icon-container'>
                      <p className='tech-icon-label'>{tech.name.replace('Icon', '')}</p>
                      <img key={tech.id} className='tech-icon' src={tech.icon} alt={tech.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProxyWebServer;