import Image from "next/image"
import React from "react"

import phoneImage from "../../../../public/AboutPhone.svg"

interface BlueTileProps {
  header: string
  content: string
}

const BlueTile: React.FC<BlueTileProps> = ({ header, content }) => {
  return (
    <div className="col-start-2 row-start-1 row-end-3 flex size-full flex-col justify-between overflow-hidden rounded-[40px] bg-blue">
      <div className="m-6 flex flex-col gap-4 py-2 text-center">
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
      <div className="flex justify-center lg:hidden">
        <div className="h-auto w-full max-w-[380px]">
          <Image
            src={phoneImage}
            alt="Phone image"
            width={380}
            height={800}
            className="max-w-full object-contain"
            style={{ objectPosition: "bottom" }}
          />
        </div>
      </div>
    </div>
  )
}

export default BlueTile
