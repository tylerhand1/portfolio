import { Link } from 'react-router-dom';
import { ProjectProps } from '@/types';

const Project = ({ title, info }: ProjectProps) => {
  const createLink = (title: string) => {
    return title.replace(/ /g, '-');
  };

  const baseLink = '/projects';
  const titleLink = createLink(title);
  return (
    <div className='project-card'>
      <Link className='flex flex-column' to={`${baseLink}/${titleLink}`}>
        <h4>{title}</h4>
        <p>{info}</p>
      </Link>
    </div>
  );
};

export default Project;