import Image from "next/image"

import arrow from "../../../public/arrow.svg"
import { MotionDiv } from "../motion-components/motion-div"

export const StepArrow = () => {
  return (
    <MotionDiv>
      <Image
        src={arrow}
        alt="arrow"
        className="h-[30px] lg:h-[28px] lg:rotate-90 md:h-[26px]"
      />
    </MotionDiv>
  )
}
