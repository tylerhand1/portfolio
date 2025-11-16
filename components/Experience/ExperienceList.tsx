import { HTMLAttributes } from 'react';

const ExperienceList = ({ children }: HTMLAttributes<HTMLDataListElement>) => (
  <dl className="text-balance w-full max-w-[800px]">{children}</dl>
);

export default ExperienceList;
