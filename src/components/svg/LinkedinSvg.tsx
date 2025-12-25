import * as React from "react"
import { SVGProps } from "react"
const LinkedInSvg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.25 1h-8.5c-.4 0-.75.35-.75.75v8.5c0 .4.35.75.75.75h8.5c.4 0 .75-.35.75-.75v-8.5c0-.4-.35-.75-.75-.75ZM4 9.5H2.5V4.75H4V9.5Zm-.75-5.4c-.5 0-.85-.35-.85-.85s.4-.85.85-.85c.45 0 .85.35.85.85s-.4.85-.85.85ZM9.5 9.5H8V6.9c0-.75-.35-1-.75-1-.45 0-.9.35-.9 1.05V9.5h-1.5V4.75H6.3v.65c.15-.3.65-.8 1.45-.8.85 0 1.75.5 1.75 1.95V9.5Z"
    />
  </svg>
)
export default LinkedInSvg
