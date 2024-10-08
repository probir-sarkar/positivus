import * as React from "react"
export const StarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    // fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.01 2.06 14 0l-2.04 7.01L14 14l-6.99-2.04L0 14l2.06-6.99L0 0l7.01 2.06Z"
    />
  </svg>
)
