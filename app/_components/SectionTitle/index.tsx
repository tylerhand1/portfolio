import { HTMLAttributes } from 'react';

const SectionTitle = ({
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    {...props}
    className="text-center text-highlight font-bold text-xl md:text-2xl lg:text-6xl"
  >
    {children}
  </h2>
);

export default SectionTitle;
