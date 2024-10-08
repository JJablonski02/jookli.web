import type { StaticImageData } from "next/image"
import Image from "next/image"
import React from "react"

import { Squares } from "./HomePageComponents/Squares"
import WidthWrapper from "./WidthWrapper"

interface StepTileProps {
  className?: string
  header: string
  paragraph: string
  secondParagraph: string
  step?: string
  alt: string
  src?: StaticImageData
  squaresPosition: "left" | "right"
  square1Id?: string
  square2Id?: string
  stepType?: "1" | "2" | "3"
  customContent?: React.ReactElement
}

const StepTile: React.FC<StepTileProps> = ({
  header,
  paragraph,
  secondParagraph,
  step,
  src,
  alt,
  squaresPosition,
  square1Id,
  square2Id,
  stepType,
  className,
  customContent,
}) => {
  return (
    <section>
      <Squares
        className="w-[90%] overflow-hidden lg:my-12"
        position={squaresPosition}
        square1Id={square1Id}
        square2Id={square2Id}
      >
        <WidthWrapper className="self-center">
          <div
            className={`${className} mx-20 flex flex-row items-center justify-between gap-8 lg:flex-col md:mx-0`}
          >
            <div className="flex items-center justify-center">
              <div className="flex max-h-[500px] min-w-[500px] items-center justify-center overflow-hidden rounded-[90px] border-4 border-blue bg-white md:aspect-[1/1] md:w-[95%] md:min-w-0">
                {customContent ||
                  (stepType === "1" && src ? (
                    <Image
                      className="mb-[-250px] translate-y-[20px] object-cover md:translate-y-[8%]"
                      src={src}
                      alt={alt}
                      height={400}
                      width={400}
                    />
                  ) : stepType === "2" && src ? (
                    <Image className="grow object-cover" src={src} alt={alt} />
                  ) : src ? (
                    <Image
                      className="mb-[-250px] translate-y-[20px] object-cover md:translate-y-[8%]"
                      src={src}
                      alt={alt}
                      height={400}
                      width={400}
                    />
                  ) : (
                    <></>
                  ))}
              </div>
            </div>
            <div className="flex w-3/5 flex-col lg:w-full lg:items-center lg:text-center">
              <span className="font-PoppinsMedium text-3xl text-blue">
                {step}
              </span>
              <h1 className="mt-6 text-3xl text-white lg:text-2xl md:text-xl">
                {header}
              </h1>
              <p className="mt-7 line-clamp-[20] text-xl text-white lg:text-lg md:text-sm">
                {paragraph}
                <br />
                <br />
                {secondParagraph}
              </p>
            </div>
          </div>
        </WidthWrapper>
      </Squares>
    </section>
  )
}

export default StepTile
