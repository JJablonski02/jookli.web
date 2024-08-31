import Image from "next/image";
import React from "react";

interface whiteTileProps {
  src: string;
  alt: string;
  header: string;
  content: string;
}

const WhiteTile: React.FC<whiteTileProps> = ({ header, content, src, alt }) => {
  return (
    <div className="w-full h-full rounded-[40px] bg-primary">
      <div className="flex flex-col flex-start m-6">
        <div className="flex flex-row items-center gap-[20px] mb-[8px]">
          <Image
            className="bg-blue rounded-3xl"
            width={68}
            src={src}
            alt={alt}
          />
          <h3 className="text-black">{header}</h3>
        </div>
        <p className="text-black">{content}</p>
      </div>
    </div>
  );
};

export default WhiteTile;
