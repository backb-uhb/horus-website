import * as React from "react";
import { SVGProps } from "react";
const Accordion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={9}
    //     height={15}
    viewBox="0 0 9 15"
    fill="none"
    {...props}
  >
    <path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.667}
      d="m1.425 14.1 5.433-5.433a1.655 1.655 0 0 0 0-2.334L1.425.9"
    />
  </svg>
);
export default Accordion;
