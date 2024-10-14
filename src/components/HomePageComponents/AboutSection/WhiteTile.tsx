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
    <MotionDiv className="size-full rounded-[40px] bg-primary">
      <div className="flex-start m-6 flex flex-col">
        <div className="mb-[8px] flex flex-row items-center gap-[20px]">
          <Image
            className="rounded-3xl bg-blue"
            width={68}
            src={src}
            alt={alt}
          />
          <h2 className="text-xl text-black">{header}</h2>
        </div>
        <p className="text-black">{content}</p>
      </div>
    </MotionDiv>
  )
}

export default WhiteTile
