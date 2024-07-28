import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import JPDownloadButton from "./JPDownloadButton";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="mx-8 mt-14">
      <div className="px-6 flex justify-between items-center md:flex-col">
        <div className="md:mb-10">
          <h1 className="text-5xl w-1/2">{t("headerDescription")}</h1>
          <p className="mt-10 text-xl font-semibold w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, nulla.
          </p>
          <div className="flex gap-4 mt-4">
            <JPDownloadButton className="text-primary bg-blue" />
          </div>
        </div>
        <div>
          <Image src="next.svg" alt="Home Image" width={400} height={500} />
        </div>
      </div>
    </header>
  );
};

export default Header;
