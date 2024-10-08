import Image from "next/image"

import horizontalLine1 from "../../public/horizontal1.svg"
import horizontalLine2 from "../../public/horizontal2.svg"
import horizontalLine3 from "../../public/horizontal3.svg"
import horizontalLine4 from "../../public/horizontal4.svg"
import horizontalLine5 from "../../public/horizontal5.svg"

type HorizontalLineType = "1" | "2" | "3" | "4" | "5"

interface IHorizontalLine {
  variant: HorizontalLineType
}

export const HorizontalLine: React.FC<IHorizontalLine> = ({ variant }) => {
  const horizontalLine = {
    "1": horizontalLine1,
    "2": horizontalLine2,
    "3": horizontalLine3,
    "4": horizontalLine4,
    "5": horizontalLine5,
  }[variant]

  return (
    <div className="flex w-full justify-center lg:hidden">
      <div className="my-[-25px] w-full max-w-[1920px] pl-[308.5px] pr-[270px]">
        <div className="relative w-full">
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
