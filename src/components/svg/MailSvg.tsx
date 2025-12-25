import * as React from "react"
import { SVGProps } from "react"
const MailSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={11}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={1}
      strokeWidth={1.167}
      d="M12.833 2A1.17 1.17 0 0 0 11.666.833H2.333A1.17 1.17 0 0 0 1.166 2m11.667 0v7a1.17 1.17 0 0 1-1.167 1.166H2.333A1.17 1.17 0 0 1 1.166 9V2m11.667 0L7 6.083 1.167 2"
    />
  </svg>
)
export default MailSvg
