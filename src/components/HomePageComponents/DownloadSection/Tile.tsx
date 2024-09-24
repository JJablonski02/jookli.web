import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import iphone from "@/../public/iphone.svg"
import samsung from "@/../public/samsung-phone.svg";

interface TileProps {
  header: string;
  description: string;
  type: "android" | "ios";
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ header, description, type, children }) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-col items-center pt-8 px-8">
        <h3 className="text-black text-2xl mb-4 font-PoppinsMedium">
          {header}
        </h3>
        <p className="text-black text-md text-center mb-4 max-w-[80%] md:max-w-full">{description}</p>
        {children}
        <div className="mt-8">
          {type === 'android' ? (
            <Image src={samsung} alt="samsung" />
          ) : (
            <Image src={iphone} alt="iphone" />
          )}
         </div>
      </div>
    </div>
  );
};

export default Tile;
