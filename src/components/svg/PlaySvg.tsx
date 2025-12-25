import * as React from "react";
import { SVGProps } from "react";
const PlaySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="#DFAB60"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M15.892 15.891c3.258-3.258 3.258-8.533 0-11.783M4.108 4.108C.849 7.366.849 12.64 4.108 15.89M7.25 17.842A8.39 8.39 0 0 0 10 18.3a8.617 8.617 0 0 0 2.75-.458M7.25 2.158A8.39 8.39 0 0 1 10 1.699c.933 0 1.858.15 2.75.459"
    />
    <path
      stroke="#DFAB60"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M7.283 10V8.61c0-1.734 1.225-2.442 2.725-1.575l1.209.7 1.208.7c1.5.866 1.5 2.283 0 3.15l-1.209.7-1.208.7c-1.5.866-2.725.158-2.725-1.575V10Z"
    />
  </svg>
);
export default PlaySvg;
