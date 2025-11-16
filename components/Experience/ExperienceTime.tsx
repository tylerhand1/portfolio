import { HTMLAttributes } from 'react';

const ExperienceTime = ({ children }: HTMLAttributes<HTMLElement>) => (
  <dt className="uppercase font-light text-sm md:text-base text-fg-tertiary">
    {children}
  </dt>
);

export default ExperienceTime;
