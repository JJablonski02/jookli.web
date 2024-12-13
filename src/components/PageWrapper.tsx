import type { HTMLAttributes, ReactNode } from "react"
import React from "react"

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <main className={`mx-auto max-w-[1920px] ${className || ""}`}>
      {children}
    </main>
  )
}

export default PageWrapper
