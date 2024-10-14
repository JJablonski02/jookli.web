import Image from "next/image"
import React from "react"

import iphone from "@/../public/iphone.svg"
import samsung from "@/../public/samsung-phone.svg"
import { MotionDiv } from "@/components/motion-components/motion-div"

interface TileProps {
  header: string
  description: string
  type: "android" | "ios"
  children: React.ReactNode
}

const Tile: React.FC<TileProps> = ({ header, description, type, children }) => {
  return (
    <MotionDiv className="rounded-2xl bg-white">
      <div className="flex flex-col items-center px-8 pt-8 lg:px-2">
        <h3 className="mb-4 font-PoppinsMedium text-2xl text-black">
          {header}
        </h3>
        <p className="text-md mb-4 max-w-[80%] text-center text-black md:max-w-full">
          {description}
        </p>
        {children}
        <div className="mt-8">
          {type === "android" ? (
            <Image src={samsung} alt="samsung" />
          ) : (
            <Image src={iphone} alt="iphone" />
          )}
        </div>
      </div>
    </MotionDiv>
  )
}

export default Tile
