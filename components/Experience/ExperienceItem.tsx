import { HTMLAttributes } from 'react';

const ExperienceItem = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-col md:flex-row gap-2 md:justify-between mb-4 md:mb-4 md:p-4 cursor-pointer md:hover:bg-bg-tertiary rounded-md">
    {children}
  </div>
);

export default ExperienceItem;
