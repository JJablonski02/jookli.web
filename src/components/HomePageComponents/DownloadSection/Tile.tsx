import Image from "next/image"
import React from "react"

import iphone from "@/../public/iphone.svg"
import samsung from "@/../public/samsung-phone.svg"

interface TileProps {
  header: string
  description: string
  type: "android" | "ios"
  children: React.ReactNode
}

const Tile: React.FC<TileProps> = ({ header, description, type, children }) => {
  return (
    <div className="rounded-2xl bg-white">
      <div className="flex flex-col items-center px-8 pt-8">
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
    </div>
  )
}

export default Tile
