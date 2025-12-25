import * as React from "react"
import { SVGProps } from "react"
const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={6}
    // height={10}
    viewBox="0 0 6 10"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 9 4-4-4-4"
    />
  </svg>
)
export default ArrowSvg
