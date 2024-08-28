import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.svg";

interface TileProps {
  header: string;
  description: string;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ header, description, children }) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-col items-center  p-8">
        <h3 className="text-black text-2xl mb-4 font-PoppinsMedium">
          {header}
        </h3>
        <p className="text-black text-sm text-center mb-4">{description}</p>
        {children}
        <Image src={logo} alt="icon" />
      </div>
    </div>
  );
};

export default Tile;
