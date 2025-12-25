import * as React from "react"
import { SVGProps } from "react"
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={3}
    fill="none"
    {...props}
  >
    <path
      fill="#EBEBEB"
      d="M19.298 1.282A1.128 1.128 0 0 1 18.17 2.41H1.631a1.128 1.128 0 1 1 0-2.256h16.54a1.128 1.128 0 0 1 1.127 1.128Z"
    />
  </svg>
)
export default MinusIcon
