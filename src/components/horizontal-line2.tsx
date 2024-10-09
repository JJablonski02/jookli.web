import Image from "next/image"

import horizontalLine5 from "../../public/horizontal5.svg"
import horizontalLine6 from "../../public/horizontal6.svg"

type HorizontalLineType = "1" | "2"

interface IHorizontalLine {
  variant: HorizontalLineType
}

export const HorizontalLine2: React.FC<IHorizontalLine> = ({ variant }) => {
  const horizontalLine = {
    "1": horizontalLine5,
    "2": horizontalLine6,
  }[variant]

  return variant === "1" ? (
    /** variant 1 */
    <div className="flex w-full justify-center lg:hidden">
      <div className="mb-[-15%] mt-[-2.3%] w-full max-w-[1920px] pl-[168.5px] pr-[270px]">
        <div className="w-full">
          <Image
            className="z-[1] w-full"
            src={horizontalLine}
            alt="horizontalline-rl"
          />
        </div>
      </div>
    </div>
  ) : (
    /** variant 2 */
    <div className="flex min-h-[150px] w-full justify-center overflow-hidden lg:hidden">
      <div className="relative mb-[-1%] mt-[-20%] w-full max-w-[1920px] pl-[168.5px] pr-[270px]">
        <div className="w-full">
          <Image
            className="w-full"
            src={horizontalLine}
            alt="horizontalline-rl"
          />
        </div>
      </div>
    </div>
  )
}
