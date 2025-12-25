import * as React from "react"
import { SVGProps } from "react"
const PhoneSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
        strokeWidth={1.167}
        d="M8.78 3.416a2.916 2.916 0 0 1 2.303 2.305M8.78 1.083a5.25 5.25 0 0 1 4.638 4.632m-.584 4.655v1.75a1.166 1.166 0 0 1-1.271 1.166 11.544 11.544 0 0 1-5.034-1.79 11.375 11.375 0 0 1-3.5-3.5 11.544 11.544 0 0 1-1.791-5.058 1.167 1.167 0 0 1 1.16-1.272h1.75A1.167 1.167 0 0 1 5.314 2.67c.074.56.211 1.11.409 1.639a1.167 1.167 0 0 1-.263 1.23l-.74.742a9.333 9.333 0 0 0 3.5 3.5l.74-.741a1.167 1.167 0 0 1 1.23-.263c.53.198 1.08.335 1.64.409a1.166 1.166 0 0 1 1.003 1.184Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default PhoneSvg
