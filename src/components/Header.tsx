import React from "react";
import Image, { StaticImageData } from "next/image";
import JPButton from "./JPButton";
import { Squares } from "./HomePageComponents/Squares";

interface HeaderProps {
  header: string;
  headerParagraph: string;
  firstButtonLabel: string;
  secondButtonLabel: string;
  src?: StaticImageData;
  secondSrc?: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({ header, headerParagraph, firstButtonLabel, secondButtonLabel, src, secondSrc }) => {

  return (
    <header>
      <div className="mx-20 mt-14 md:mt-10 md:mx-2.5 relative">
        <Squares position="right">
          <div className="p-2 md:px-0 flex justify-between items-center md:flex-col">
            <div className="md:flex md:items-center md:flex-col">
              <h1 className="text-5xl lg:w-full">
                {header}
              </h1>
              <p className="mt-8 text-lg md:mt-6 md:w-full">
                {headerParagraph}
              </p>
              <div className="mt-10 md:mx-auto md:mt-8 md:w-10/12 flex justify-start gap-6">
                <JPButton
                  className="text-primary font-PoppinsMedium p-6 bg-blue rounded-full flex flex-row gap-2 md:h-14 md:w-1/2"
                  label={firstButtonLabel}
                />
                <JPButton
                  className="text-primary font-PoppinsMedium p-6 bg-blue rounded-full flex flex-row gap-2 md:h-14 md:w-1/2"
                  label={secondButtonLabel}
                />
              </div>
            </div>
            <div className="lg:hidden mr-64 h-full w-full justify-end flex">
              {src &&
                <Image src={src} alt="Phone image" />
              }
              {secondSrc &&
                <Image className="absolute -top-12 right-44 -z-10" src={secondSrc} alt="Phone image" width={343} height={677} />
              }
            </div>
          </div>
        </Squares>
      </div>
    </header>
  );
};

export default Header;
