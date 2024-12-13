import type { ReactNode } from "react"

import { CookiesPolicySidebar } from "./cookies-policy-sidebar/cookies-policy-side-bar"

interface CookiesCommonContainerProps {
  children: ReactNode
  description?: string
}

export const CookiesCommonContainer: React.FC<CookiesCommonContainerProps> = ({
  children,
  description,
}) => {
  return (
    <div className="w-full">
      {description && (
        <div className="pb-12 pr-20 lg:pr-0">
          <p>{description}</p>
        </div>
      )}
      <div className="flex w-full flex-row gap-4 lg:flex-col">
        <div className="w-1/4 min-w-[325px] lg:w-full">
          <CookiesPolicySidebar />
        </div>
        <div className="mx-auto flex w-full max-w-[1000px]">{children}</div>
      </div>
    </div>
  )
}
