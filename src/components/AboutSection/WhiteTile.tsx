import Image from "next/image";
import React, { ReactNode } from "react";

interface whiteTileProps {
  src: string;
  alt: string;
  header: string;
  content: string;
}

const WhiteTile: React.FC<whiteTileProps> = ({ header, content, src, alt }) => {
  return (
    <div className="w-full h-full rounded-[40px] bg-primary">
      <div className="flex flex-col flex-start m-6 py-2">
        <Image
          className="p-2 bg-blue rounded-xl"
          width={50}
          src={src}
          alt={alt}
        />
        <h3 className="text-black">{header}</h3>
        <p className="text-black">{content}</p>
      </div>
    </div>
  );
};

export default WhiteTile;
