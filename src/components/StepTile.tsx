import React from "react";
import WidthWrapper from "./WidthWrapper";
import Image, { StaticImageData } from "next/image";
import { Squares } from "./HomePageComponents/Squares";

interface StepTileProps {
  className?: string;
  header: string;
  paragraph: string;
  secondParagraph: string;
  step?: string;
  alt: string;
  src?: StaticImageData;
  squaresPosition: "left" | "right";
  square1Id?: string;
  square2Id?: string;
  stepType?: "1" | "2" | "3";
  customContent?: React.ReactElement;
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
        className="w-[90%] lg:my-12 overflow-hidden"
        position={squaresPosition}
        square1Id={square1Id}
        square2Id={square2Id}
      >
        <WidthWrapper className="self-center">
          <div
            className={`${className} flex flex-row lg:flex-col justify-between items-center gap-8 mx-20 md:mx-0`}
          >
            <div className=" flex items-center justify-center">
              <div className="overflow-hidden min-w-[500px] max-h-[500px] md:w-[95%] md:aspect-[1/1] md:min-w-0 flex items-center justify-center bg-white border-4 border-blue rounded-[90px]">
                {customContent ? (
                  customContent
                ) : stepType === "1" && src ? (
                  <Image
                    className="object-cover transform translate-y-[20px] mb-[-250px] md:translate-y-[8%]"
                    src={src}
                    alt={alt}
                    height={400}
                    width={400}
                  />
                ) : stepType === "2" && src ? (
                  <Image
                    className="object-cover flex-grow"
                    src={src}
                    alt={alt}
                  />
                ) : src ? (
                  <Image
                    className="object-cover transform translate-y-[20px] mb-[-250px] md:translate-y-[8%]"
                    src={src}
                    alt={alt}
                    height={400}
                    width={400}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="w-3/5 flex flex-col lg:w-full lg:text-center lg:items-center">
              <span className="text-blue text-3xl font-PoppinsMedium">
                {step}
              </span>
              <h1 className="text-3xl lg:text-2xl md:text-xl text-white mt-6">
                {header}
              </h1>
              <p className="text-xl lg:text-lg md:text-sm text-white mt-7 line-clamp-[20]">
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
  );
};

export default StepTile;
