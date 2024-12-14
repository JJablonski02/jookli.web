import Image from "next/image"
import React from "react"

import { MotionDiv } from "@/components/motion-components/motion-div"

interface whiteTileProps {
  src: string
  alt: string
  header: string
  content: string
}

const WhiteTile: React.FC<whiteTileProps> = ({ header, content, src, alt }) => {
  return (
    <MotionDiv className="size-full rounded-[40px] bg-white">
      <div className="flex-start m-6 flex flex-col">
        <div className="mb-[8px] flex flex-row items-center gap-[20px]">
          <Image
            className="w-[58px] rounded-2xl bg-blue lg:w-[48px] md:w-[38px] md:rounded-xl"
            src={src}
            alt={alt}
          />
          <h5 className="font-semibold text-black">{header}</h5>
        </div>
        <p className="text-black">{content}</p>
      </div>
    </MotionDiv>
  )
}

export default WhiteTile
