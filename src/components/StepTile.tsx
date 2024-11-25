import type { StaticImageData } from "next/image"
import Image from "next/image"
import React from "react"

import { MotionDiv } from "./motion-components/motion-div"
import { Squares } from "./Squares"
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
          <MotionDiv
            className={`${className} mx-20 flex flex-row items-center justify-between gap-8 lg:flex-col md:mx-0`}
          >
            <div className="flex items-center justify-center">
              <div className="flex max-h-[400px] min-w-[400px] max-w-[400px] items-center justify-center overflow-hidden rounded-[90px] border-4 border-blue bg-white md:aspect-[1/1] md:w-4/5 md:min-w-0 md:rounded-[50px]">
                {customContent ||
                  (() => {
                    if (stepType === "1" && src) {
                      return (
                        <Image
                          className="mb-[-200px] w-3/4 translate-y-[20px] object-cover md:mb-[-80px] md:translate-y-[8%]"
                          src={src}
                          alt={alt}
                          height={400}
                          width={400}
                        />
                      )
                    }
                    if (stepType === "2" && src) {
                      return (
                        <Image
                          className="grow object-cover"
                          src={src}
                          alt={alt}
                        />
                      )
                    }
                    if (src) {
                      return (
                        <Image
                          className="mb-[-200px] w-3/4 translate-y-[20px] object-cover md:mb-[-80px] md:translate-y-[8%]"
                          src={src}
                          alt={alt}
                          height={400}
                          width={400}
                        />
                      )
                    }
                  })()}
              </div>
            </div>
            <div className="flex w-3/5 flex-col lg:w-full lg:items-center lg:text-center">
              <h2 className="text-blue">{step}</h2>
              <h3 className="mt-6 text-white">{header}</h3>
              <p className="mt-7 line-clamp-[20] text-start text-white">
                {paragraph}
                <br />
                <br />
                {secondParagraph}
              </p>
            </div>
          </MotionDiv>
        </WidthWrapper>
      </Squares>
    </section>
  )
}

export default StepTile
