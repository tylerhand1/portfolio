import { HTMLAttributes } from 'react';

const SectionContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-col gap-6 justify-center items-center">
    {children}
  </div>
);

export default SectionContainer;
