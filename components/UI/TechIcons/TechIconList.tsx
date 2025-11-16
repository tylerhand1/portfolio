import { HTMLAttributes } from 'react';

const TechIconList = ({ children }: HTMLAttributes<HTMLUListElement>) => (
  <dd>
    <ul className="flex flex-wrap text-xs font-medium leading-5 gap-2">
      {children}
    </ul>
  </dd>
);

export default TechIconList;
