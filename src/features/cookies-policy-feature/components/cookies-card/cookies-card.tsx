import { Card } from "@nextui-org/card"
import type { ReactNode } from "react"

export const CookiesCard: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Card className="w-full bg-secondary-light px-4">{children}</Card>
}
