import * as React from "react"
import { SVGProps } from "react"
const PlayButtonSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={84}
    height={84}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M42 78c19.882 0 36-16.118 36-36S61.882 6 42 6 6 22.118 6 42s16.118 36 36 36Z"
    />
    <path fill="#000" d="M35 57.75v-31.5L56 42 35 57.75Z" />
  </svg>
)
export default PlayButtonSvg
