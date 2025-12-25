import * as React from "react";
import { SVGProps } from "react";
const RadialGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={1412}
    //     height={1501}
    viewBox=" 0 0 1412 1501"
    fill="none"
    {...props}
  >
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(750.01 750.27) scale(1060.66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ECB76A" stopOpacity={0.2} />
        <stop offset={0.7} stopColor="#ECB76A" stopOpacity={0} />
        <stop offset={1} stopColor="#ECB76A" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default RadialGradient;
