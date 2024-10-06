import React from "react";
import Image, { StaticImageData } from "next/image";
import { Squares } from "./HomePageComponents/Squares";
import JPButton from "./buttons/JPButton";

interface HeaderProps {
  header: string;
  headerParagraph: string;
  firstButtonLabel: string;
  secondButtonLabel: string;
  src?: StaticImageData;
  secondSrc?: StaticImageData;
  square1Id?: string,
  square2Id?: string,
}

const Header: React.FC<HeaderProps> = ({ header, headerParagraph, firstButtonLabel, secondButtonLabel, src, square1Id, square2Id, secondSrc }) => {
  
  return (
    <header>
        <Squares position="right" square1Id={square1Id} square2Id={square2Id} >
            <div className="p-2 py-5 pl-20 gap-5 flex justify-between items-center md:flex-col lg:text-center lg:items-center lg:pr-20 md:px-0 flex-grow">
              <div className="md:flex md:items-center md:flex-col w-3/4 lg:w-full">
                <h1 className="text-5xl md:text-4xl whitespace-pre-wrap lg:whitespace-normal">
                  {header}
                </h1>
                <p className="mt-8 text-lg md:mt-6 md:w-full md:text-center">
                  {headerParagraph}
                </p>
                <div className="mt-10 lg:mx-auto md:mt-8 lg:w-10/12 flex justify-start gap-6">
                  <JPButton
                    className="text-primary font-PoppinsMedium p-6 bg-blue rounded-full flex flex-row gap-2 lg:h-14 lg:w-1/2"
                    label={firstButtonLabel}
                  />
                  <JPButton
                    className="text-primary font-PoppinsMedium p-6 bg-blue rounded-full flex flex-row gap-2 lg:h-14 lg:w-1/2"
                    label={secondButtonLabel}
                  />
                </div>
              </div>
              <div className="lg:hidden relative">
                {src &&
                  <Image src={src} alt="Phone image" />
                }
                {secondSrc &&
                  <Image className="absolute top-14 -right-40 z-[1]" src={secondSrc} alt="Phone image" />
                }
              </div>
            </div>
            </Squares>
    </header>
  );
};

export default Header;
