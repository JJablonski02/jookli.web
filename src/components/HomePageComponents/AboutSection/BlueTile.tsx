import Image from "next/image";
import React from "react";
import phoneImage from "../../../../public/AboutPhone.svg";

interface BlueTileProps {
  header: string;
  content: string;
}

const BlueTile: React.FC<BlueTileProps> = ({ header, content }) => {
  return (
    <div className="w-full h-full bg-blue rounded-[40px] row-start-1 row-end-3 col-start-2 overflow-hidden">
      <div className="text-center flex flex-col flex-start m-6 py-2 gap-4 relative">
        <h3>{header}</h3>
        <p>{content}</p>
        <div className="flex justify-center md:hidden ">
          <Image className="absolute"
            src={phoneImage} alt="Phone image" width={400} height={800} />
        </div>
      </div>
    </div>
  );
};

export default BlueTile;
