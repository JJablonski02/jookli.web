import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const WidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto size-full px-2.5", className)}>
      {children}
    </div>
  )
}

export default WidthWrapper
