import React from "react";
import Image, { StaticImageData } from "next/image";
import JPButton from "./JPButton";

interface HeaderProps {
    header: string;
    headerParagraph: string;
    firstButtonLabel: string;
    secondButtonLabel: string;
    src: StaticImageData;
    secondSrc?: StaticImageData;
}

const Header: React.FC<HeaderProps> = ({header,headerParagraph, firstButtonLabel, secondButtonLabel,src, secondSrc}) => {

  return (
    <header className="mx-20 mt-14 md:mt-10 md:mx-2.5 relative">
      {/* <div className="-z-10 lg:hidden">
        <span className="border-[5px] border-blue w-[381px] h-[381px] absolute rounded-[54px] rotate-45 -right-40 top-16"></span>
        <span className="border-[5px] border-blue w-[381px] h-[381px] absolute rounded-[54px] rotate-45 -right-60 top-16"></span>
      </div> */}
      <div className="p-2 md:px-0 flex justify-between items-center md:flex-col">
        <div className="md:flex md:items-center md:flex-col">
          <h1 className="text-5xl w-10/12 md:w-full">
            {header}
          </h1>
          <p className="mt-10 text-lg w-2/3 md:mt-6 md:w-full">
            {headerParagraph}
          </p>
          <div className="w-2/3 mt-8 md:mx-auto md:mt-8 md:w-10/12 flex justify-start gap-6">
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
        <div className="lg:hidden">
          <Image src={src} alt="Phone image" width={343} height={677} />
          {secondSrc && 
            <Image className="absolute -top-12 right-44 -z-10" src={src} alt="Phone image" width={343} height={677}/>
          }
        </div>
      </div>
      
    </header>
  );
};

export default Header;
