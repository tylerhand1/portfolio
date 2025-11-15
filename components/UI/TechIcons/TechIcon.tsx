import { HTMLAttributes } from 'react';

const TechIcon = ({ children }: HTMLAttributes<HTMLLIElement>) => (
  <li className="flex items-center px-3 py-1 bg-emerald-400/10 text-highlight-glow rounded-full mr-1.5 mt-2">
    {children}
  </li>
);

export default TechIcon;
