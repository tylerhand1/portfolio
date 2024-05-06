/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Project = ({ img, imgAlt, title, info }) => {
  const createLink = (title) => {
    return title.replace(/ /g, '-');
  };

  let baseLink = '/projects';
  let titleLink = createLink(title);

  if (img && imgAlt) {
    return (
      <div className="project-card">
        <Link className="flex" to={`${baseLink}/${titleLink}`}>
          <img src={img} alt={imgAlt} />
          <h4>{title}</h4>
          <p>{info}</p>
        </Link>
      </div>
    );
  }
  return (
    <div className="project-card">
      <Link className="flex" to={`${baseLink}/${titleLink}`}>
        <h4>{title}</h4>
        <p>{info}</p>
      </Link>
    </div>
  );
};

export default Project;