"use client"

import type { StaticImageData } from "next/image"
import Image from "next/image"
import React from "react"

import JPButton from "./buttons/JPButton"
import { MotionDiv } from "./motion-components/motion-div"
import { Squares } from "./Squares"

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
        <div className="flex grow items-center justify-between gap-5 p-2 py-5 pl-20 lg:flex-col lg:items-center lg:px-5 lg:text-center md:px-0">
          <MotionDiv className="w-3/4 lg:w-full md:flex md:flex-col md:items-center">
            <h1 className="text-ellipsis text-6xl lg:whitespace-normal lg:text-5xl sm:text-center sm:text-[50px]">
              {header}
            </h1>
            <p className="mt-8 text-2xl lg:text-xl md:mt-6 md:w-full md:text-center">
              {headerParagraph}
            </p>
            <div className="mt-10 flex justify-start gap-6 lg:mx-auto lg:w-10/12 md:mt-8 md:w-full md:gap-0">
              <JPButton
                className="mx-4 flex h-16 w-[180px] min-w-[120px] flex-row gap-2 rounded-full bg-blue p-6 font-PoppinsMedium text-primary lg:h-14 lg:w-1/2"
                label={firstButtonLabel}
              />
              <JPButton
                className="flex h-16 w-[180px] flex-row gap-2 rounded-full bg-blue p-6 font-PoppinsMedium text-primary lg:h-14 lg:w-1/2"
                label={secondButtonLabel}
              />
            </div>
          </MotionDiv>
          <MotionDiv className="justify-center md:flex md:w-full">
            <div className="relative">
              {src && <Image src={src} alt="Phone image" />}
              {secondSrc && (
                <Image
                  className="absolute -right-40 top-14 z-[1] lg:hidden"
                  src={secondSrc}
                  alt="Phone image"
                />
              )}
            </div>
          </MotionDiv>
        </div>
      </Squares>
    </header>
  )
}

export default Header
