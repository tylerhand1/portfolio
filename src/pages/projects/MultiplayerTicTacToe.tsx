import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Video
import TicTacToeDemo from '@/assets/projects/TicTacToe/TicTacToeDemo.mp4';

// Tech icons
import cssIcon from '@/assets/technology-icons/CSS3.svg';
import expressIcon from '@/assets/technology-icons/Express.svg';
import gitIcon from '@/assets/technology-icons/Git.svg';
import htmlIcon from '@/assets/technology-icons/HTML5.svg';
import nodeIcon from '@/assets/technology-icons/Nodejs.svg';
import reactIcon from '@/assets/technology-icons/React.svg';
import tsIcon from '@/assets/technology-icons/TypeScript.svg';
import socketIOIcon from '@/assets/technology-icons/Socket.io.svg';

const techData = [
  {
    id: 0,
    icon: htmlIcon,
    name: 'HTML5 Icon',
  },
  {
    id: 1,
    icon: cssIcon,
    name: 'CSS3 Icon',
  },
  {
    id: 3,
    icon: reactIcon,
    name: 'ReactJS Icon',
  },
  {
    id: 4,
    icon: tsIcon,
    name: 'TypeScript Icon',
  },
  {
    id: 5,
    icon: nodeIcon,
    name: 'Node.js Icon',
  },
  {
    id: 6,
    icon: expressIcon,
    name: 'Express Icon',
  },
  {
    id: 7,
    icon: socketIOIcon,
    name: 'Socket.IO Icon'
  },
  {
    id: 8,
    icon: gitIcon,
    name: 'Git Icon',
  },
];

const MultiplayerTicTacToe = () => {
  return (
    <>
      <Navbar isProjects={true} />
      <main className='flex flex-column'>
        <div className='flex flex-column project-page-container'>
          <h1>Multiplayer<br />Tic-Tac-Toe</h1>
          <div className='flex project-page-section'>
            <video className='project-page-media' controls>
              <source src={TicTacToeDemo} type='video/mp4' />
            </video>
            <div className='flex flex-column project-text project-text-side'>
              <h2>Introduction</h2>
              <p>This site aims to enable people to play tic-tac-toe with their friends with a simple to use interface.</p>
              <p>It allows anyone to be able to play a quick game by just clicking &apos;Create Lobby&apos; or joining off a friend from their lobby code.</p>
              <p>The goal of this project was to further my understanding of websockets and the socket.IO library.</p>
            </div>
          </div>
          <h2>This project is live <a href='https://tictactoe.tylerhand.dev/' target='blank'>here</a>!</h2>
          <h2>Features</h2>
          <div className='flex project-page-section'>
            <div>
              <ul className='project-page-list'>
                <li>
                  <span>
                    <strong>Create / Join Lobbies: </strong>
                    This website enables users to create a new game lobby and invite their friends through an invite code or join an existing lobby through that code.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Unique Lobby Code Generation: </strong>
                    Unique codes are generated through a POST request to the backend that returns a number that is not in use and allows the frontend to then join a socket.IO room with that number.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Real-Time Game Updates: </strong>
                    Once a player makes a move, the socket.IO backend will ensure that the other player receives that data, so that the game state is updated as soon as possible.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <h2>Technologies Used</h2>
          <div className='flex project-page-section'>
            <div className='flex flex-column project-text'>
              <h3>Frontend</h3>
              <p>The frontend was built using React and TypeScript with Axios and the socket.io-client library to interact with the backend.</p>
              <h3>Backend</h3>
              <p>The backend utilized an Express REST API written in TypeScript and the socket.IO library to communicate with the frontend and keep track of games.</p>
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

export default MultiplayerTicTacToe;