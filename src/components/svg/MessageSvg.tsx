import * as React from "react"
import { SVGProps } from "react"
const MessageSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={1}
      strokeWidth={1.167}
      d="M12.25 7.208c.002.77-.178 1.53-.525 2.217a4.958 4.958 0 0 1-4.433 2.742 4.889 4.889 0 0 1-2.217-.525L1.75 12.75l1.108-3.325a4.889 4.889 0 0 1-.525-2.217 4.958 4.958 0 0 1 2.742-4.433 4.888 4.888 0 0 1 2.217-.525h.291a4.947 4.947 0 0 1 4.667 4.667v.291Z"
    />
  </svg>
)
export default MessageSvg
