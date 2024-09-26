import Image from "next/image";
import React from "react";
import phoneImage from "../../../../public/AboutPhone.svg";

interface BlueTileProps {
  header: string;
  content: string;
}

const BlueTile: React.FC<BlueTileProps> = ({ header, content }) => {
  return (
    <div className="w-full h-full bg-blue rounded-[40px] row-start-1 row-end-3 col-start-2 overflow-hidden flex flex-col justify-between">
      <div className="text-center flex flex-col m-6 py-2 gap-4">
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
      <div className="flex justify-center lg:hidden">
        <div className="w-full max-w-[380px] h-auto">
          <Image
            src={phoneImage}
            alt="Phone image"
            width={380}
            height={800}
            className="object-contain max-w-full"
            style={{objectPosition: 'bottom'}}
          />
        </div>
      </div>  
    </div>
  );
};

export default BlueTile;
