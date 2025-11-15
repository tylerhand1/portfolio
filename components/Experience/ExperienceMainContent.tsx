import { HTMLAttributes } from 'react';

const ExperienceMainContainer = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => (
  <div className="md:w-2/3 flex flex-col gap-2">{children}</div>
);

export default ExperienceMainContainer;
