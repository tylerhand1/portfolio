import { HTMLAttributes } from 'react';

const ExperienceDescription = ({ children }: HTMLAttributes<HTMLElement>) => (
  <dd className="text-fg-secondary text-sm leading-relaxed">{children}</dd>
);

export default ExperienceDescription;
