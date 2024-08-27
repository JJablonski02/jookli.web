import React from "react";
import phoneImage from "../../public/phoneImage.png";
import { useTranslations } from "next-intl";
import JPDownloadButton from "./JPDownloadButton";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="mx-8 mt-14 md:mt-10 md:mx-2.5">
      <div className="px-6 md:px-0 flex justify-between items-center md:flex-col">
        <div className="md:flex md:items-center md:flex-col">
          <h1 className="text-5xl w-10/12 md:w-full">
            {t("headerDescription")}
          </h1>
          <p className="mt-10 text-xl font-semibold w-1/2 md:mt-6 md:w-full">
            {t('headerParagraph')}
          </p>
          <div className="w-1/2 mt-8 md:mx-auto md:mt-8 md:w-10/12">
            <JPDownloadButton className="md:w-full md:h-14 text-primary md:text-xl bg-blue" />
          </div>
        </div>
        <div className="lg:hidden">
          <Image src={phoneImage} alt="Phone image" width={400} height={500} />
        </div>
      </div>
    </header>
  );
};

export default Header;
