import { HTMLAttributes } from 'react';

const SplashSection = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="h-dvh px-4 flex justify-center">{children}</div>
);

export default SplashSection;
