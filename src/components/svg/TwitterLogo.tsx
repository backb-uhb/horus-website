import * as React from "react"
import { SVGProps } from "react"
const TwitterLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="m0 0 4.889 7.333L1 12h2l2.778-3.333L8 12h6.052l-4.93-7.347L13 0h-2L8.23 3.324 6 0H0Zm3.737 2 5.333 8h1.231L4.934 2H3.737Z"
      clipRule="evenodd"
    />
  </svg>
)
export default TwitterLogo
