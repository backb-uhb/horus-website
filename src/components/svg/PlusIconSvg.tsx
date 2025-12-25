import * as React from "react"
import { SVGProps } from "react"
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={20}
    // height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      fill="#DFAB60"
      d="M19.298 10.325a1.128 1.128 0 0 1-1.128 1.128h-7.142v7.141a1.128 1.128 0 0 1-2.255 0v-7.141H1.63a1.128 1.128 0 0 1 0-2.256h7.142V2.055a1.128 1.128 0 0 1 2.255 0v7.142h7.142a1.128 1.128 0 0 1 1.128 1.128Z"
    />
  </svg>
)
export default PlusIcon
