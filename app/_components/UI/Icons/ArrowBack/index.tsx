import { SVGAttributes } from 'react';

const ArrowBackIcon = ({ ...props }: SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="current"
    {...props}
  >
    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </svg>
);

export default ArrowBackIcon;
