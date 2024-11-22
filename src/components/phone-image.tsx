import type { StaticImageData } from "next/image"
import Image from "next/image"

import dashboardPhone from "@/../public/dashboard.svg"
import earningsHistoryPhone from "@/../public/earningshistory.svg"
import homePagePhone from "@/../public/HomePagePhone.svg"

import { MotionDiv } from "./motion-components/motion-div"

type PhoneType =
  | "dashboard-phone"
  | "earnings-history-phone"
  | "home-page-phone"

const phoneImages: Record<PhoneType, StaticImageData> = {
  "dashboard-phone": dashboardPhone,
  "earnings-history-phone": earningsHistoryPhone,
  "home-page-phone": homePagePhone,
}

export const PhoneImage: React.FC<{ phoneType: PhoneType }> = ({
  phoneType,
}) => {
  return (
    <MotionDiv className="h-[640px] w-[330px] items-center lg:h-[500px] md:h-[400px] md:w-[300px]">
      <div className="relative size-full">
        <Image
          src={phoneImages[phoneType]}
          alt={phoneType}
          fill
          className="object-contain"
        />
      </div>
    </MotionDiv>
  )
}
