"use client";
import React from "react";
import sidewaysArrows from "../../../public/sidewaysArrows.svg";
import tradingChart from "../../../public/tradingChart.svg";
import wallet from "../../../public/wallet.svg";
import arrowsCircle from "../../../public/arrowsCircle.svg";
import { useTranslations } from "next-intl";
import WhiteTile from "./WhiteTile";
import BlueTile from "./BlueTile";
import JPDownloadButton from "../JPDownloadButton";

const AboutSectionTiles = () => {
  const t = useTranslations("AboutSectionTiles");

  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-3 grid-rows-2 pt-8 gap-4 place-items-center md:flex lg:flex-col md:items-start">
        <WhiteTile
          src={sidewaysArrows}
          alt="Arrows icon"
          header={t("firstTileHeader")}
          content={t("firstTileDescription")}
        />
        <BlueTile
          src={sidewaysArrows} // do zmiany obraz
          alt="Phone image"
          header={t("secondTileHeader")}
          content={t("secondTileDescription")}
        />
        <WhiteTile
          src={tradingChart}
          alt="Trading chart icon"
          header={t("thirdTileHeader")}
          content={t("thirdTileescription")}
        />
        <WhiteTile
          src={wallet}
          alt="Wallet icon"
          header={t("fourthTileHeader")}
          content={t("fourthTileDescription")}
        />
        <WhiteTile
          src={arrowsCircle}
          alt="Arrows circle icon"
          header={t("fifthTileHeader")}
          content={t("fifthTileDescription")}
        />
      </div>
      <div className="flex justify-center items-center">
        <JPDownloadButton className="text-primary bg-blue mt-10" />
      </div>
    </div>
  );
};

export default AboutSectionTiles;
