import type { StaticImageData } from "next/image"
import Image from "next/image"
import React from "react"

import JPButton from "./buttons/JPButton"
import { Squares } from "./HomePageComponents/Squares"

interface HeaderProps {
  header: string
  headerParagraph: string
  firstButtonLabel: string
  secondButtonLabel: string
  src?: StaticImageData
  secondSrc?: StaticImageData
  square1Id?: string
  square2Id?: string
}

const Header: React.FC<HeaderProps> = ({
  header,
  headerParagraph,
  firstButtonLabel,
  secondButtonLabel,
  src,
  square1Id,
  square2Id,
  secondSrc,
}) => {
  return (
    <header>
      <Squares position="right" square1Id={square1Id} square2Id={square2Id}>
        <div className="flex grow items-center justify-between gap-5 p-2 py-5 pl-20 lg:items-center lg:pr-20 lg:text-center md:flex-col md:px-0">
          <div className="w-3/4 lg:w-full md:flex md:flex-col md:items-center">
            <h1 className="whitespace-pre-wrap text-5xl lg:whitespace-normal md:text-4xl">
              {header}
            </h1>
            <p className="mt-8 text-lg md:mt-6 md:w-full md:text-center">
              {headerParagraph}
            </p>
            <div className="mt-10 flex justify-start gap-6 lg:mx-auto lg:w-10/12 md:mt-8">
              <JPButton
                className="flex flex-row gap-2 rounded-full bg-blue p-6 font-PoppinsMedium text-primary lg:h-14 lg:w-1/2"
                label={firstButtonLabel}
              />
              <JPButton
                className="flex flex-row gap-2 rounded-full bg-blue p-6 font-PoppinsMedium text-primary lg:h-14 lg:w-1/2"
                label={secondButtonLabel}
              />
            </div>
          </div>
          <div className="relative lg:hidden">
            {src && <Image src={src} alt="Phone image" />}
            {secondSrc && (
              <Image
                className="absolute -right-40 top-14 z-[1]"
                src={secondSrc}
                alt="Phone image"
              />
            )}
          </div>
        </div>
      </Squares>
    </header>
  )
}

export default Header
