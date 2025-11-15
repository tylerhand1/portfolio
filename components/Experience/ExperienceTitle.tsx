import { HTMLAttributes } from 'react';

const ExperienceTitle = ({ children }: HTMLAttributes<HTMLElement>) => (
  <dd className="font-medium md:text-xl">{children}</dd>
);

export default ExperienceTitle;
