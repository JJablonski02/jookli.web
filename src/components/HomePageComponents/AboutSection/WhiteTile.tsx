import Image from "next/image"
import React from "react"

interface whiteTileProps {
  src: string
  alt: string
  header: string
  content: string
}

const WhiteTile: React.FC<whiteTileProps> = ({ header, content, src, alt }) => {
  return (
    <div className="size-full rounded-[40px] bg-primary">
      <div className="flex-start m-6 flex flex-col">
        <div className="mb-[8px] flex flex-row items-center gap-[20px]">
          <Image
            className="rounded-3xl bg-blue"
            width={68}
            src={src}
            alt={alt}
          />
          <h3 className="text-black">{header}</h3>
        </div>
        <p className="text-black">{content}</p>
      </div>
    </div>
  )
}

export default WhiteTile
