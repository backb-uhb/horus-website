import * as React from "react"
import { SVGProps } from "react"
const TwitterSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={12}
    // height={12}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path
      fill="#888D93"
      d="m.03.3 4.633 6.214L0 11.565h1.05l4.081-4.423 3.298 4.423H12L7.107 5.002 11.446.3h-1.048l-3.76 4.073L3.602.3H.029Zm1.543.774h1.641l7.244 9.715h-1.64L1.572 1.074Z"
    />
  </svg>
)
export default TwitterSvg
