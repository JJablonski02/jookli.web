import Image from "next/image"

import arrow from "../../../public/arrow.svg"
import { MotionDiv } from "../motion-components/motion-div"

export const StepArrow = () => {
  return (
    <MotionDiv>
      <Image src={arrow} alt="arrow" className="lg:rotate-90 md:h-[30px]" />
    </MotionDiv>
  )
}
