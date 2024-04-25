/* eslint-disable react/prop-types */
const Project = ({ img, imgAlt, title, info }) => {
  if (img && imgAlt) {
    return (
      <div className="project-card">
        <a className="flex" href={`projects/${title}`}>
          <img src={img} alt={imgAlt} />
          <h4>{title}</h4>
          <p>{info}</p>
        </a>
      </div>
    );
  }
  return (
    <div className="project-card">
      <a className="flex" href={`projects/${title}`}>
        <h4>{title}</h4>
        <p>{info}</p>
      </a>
    </div>
  );
};

export default Project;