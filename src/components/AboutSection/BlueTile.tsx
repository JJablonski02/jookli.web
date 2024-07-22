import Image from "next/image";
import React from "react";

interface BlueTileProps {
  src: string;
  alt: string;
  header: string;
  content: string;
}

const BlueTile: React.FC<BlueTileProps> = ({ header, content, src, alt }) => {
  return (
    <div className="w-full h-full bg-blue rounded-[40px] row-start-1 row-end-3 col-start-2">
      <div className="flex flex-col flex-start m-6 py-2">
        <h3>{header}</h3>
        <p>{content}</p>
        <div className="flex justify-center">
          <Image src={src} alt={alt} width={50} />
        </div>
      </div>
    </div>
  );
};

export default BlueTile;
