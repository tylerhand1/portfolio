import { HTMLAttributes } from 'react';

const Content = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="min-h-dvh p-4 bg-bg-secondary">{children}</div>
);

export default Content;
