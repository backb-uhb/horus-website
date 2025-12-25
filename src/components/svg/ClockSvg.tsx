import * as React from "react"
import { SVGProps } from "react"
const ClockSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={29}
    // height={28}
    viewBox="0 0 29 28"
    fill="none"
    {...props}
  >
    <path
      fill="#DFAB60"
      d="M14.5.25C22.094.25 28.25 6.406 28.25 14S22.094 27.75 14.5 27.75.75 21.594.75 14 6.906.25 14.5.25Zm0 2.75a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 2.75a1.375 1.375 0 0 1 1.365 1.214l.01.161v6.306l3.722 3.722a1.375 1.375 0 0 1-1.815 2.058l-.13-.114-4.124-4.125a1.375 1.375 0 0 1-.39-.792l-.013-.18V7.125A1.375 1.375 0 0 1 14.5 5.75Z"
    />
  </svg>
)
export default ClockSvg
