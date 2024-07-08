import React from "react";
import Image from "next/image";
import JPButton from "./JPButton";

const Header = () => {
  return (
    <header className="mx-8 mt-14">
      <div className="px-6 grid place-items-center grid-cols-2">
        <div>
          <h1 className="text-5xl text-primary">
            Lorem ipsum <br /> dolor sit amet.
          </h1>
          <p className="mt-10 text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, nulla.
          </p>
          <h6 className="text-base mt-6">Get the app</h6>
          <div className="flex gap-4 mt-4">
            <JPButton label="Get the app" />
            <JPButton label="Get the app" />
          </div>
        </div>
        <Image src="next.svg" alt="Home Image" width={400} height={500} />
      </div>
    </header>
  );
};

export default Header;
