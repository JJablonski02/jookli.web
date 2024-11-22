import type { HTMLAttributes } from "react"

interface ISquares extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
  position: "left" | "right"
  square1Id?: string
  square2Id?: string
}

export const Squares: React.FC<ISquares> = ({
  children,
  position,
  className,
  square1Id,
  square2Id,
}) => {
  const commonClasses =
    "lg:hidden absolute h-[480px] aspect-square border-5 border-blue transform rotate-45 top-1/2 rounded-square z-[2] bg-secondary "

  const positionFirstClasses =
    position === "left"
      ? "left-0 -translate-y-1/2 translate-x-[-3.75rem]"
      : "right-0 -translate-y-1/2 translate-x-[-2rem]"

  const positionSecondClasses =
    position === "left"
      ? "left-0 -translate-y-1/2 translate-x-[4.375rem]"
      : "right-0 -translate-y-1/2 translate-x-[5.5rem]"

  const commonChildrenClasses =
    "relative z-[3] w-[80%] lg:w-full flex min-h-[680px] lg:min-h-0" /** Ustalona min-h jako stała na 680px */

  const childrenClasses =
    position === "left"
      ? `${commonChildrenClasses} ml-auto `
      : `${commonChildrenClasses}`

  return (
    <div className="relative max-h-[694px] w-full px-5 lg:max-h-none">
      <div
        id={square1Id}
        className={`${commonClasses + positionFirstClasses}`}
      />
      <div
        id={square2Id}
        className={`${commonClasses + positionSecondClasses}`}
      />
      <div className={`${childrenClasses} ${className || ""}`}>{children}</div>
    </div>
  )
}
