"use client";
import React from "react";
import gameController from "../../../../public/gameController.svg";
import tradingChart from "../../../../public/tradingChart.svg";
import wallet from "../../../../public/wallet.svg";
import { useTranslations } from "next-intl";
import WhiteTile from "./WhiteTile";
import BlueTile from "./BlueTile";
import securityIcon from "../../../../public/securityIcon.svg";

const AboutSectionTiles = () => {
  const t = useTranslations("HomePage.AboutSectionTiles");

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-3 grid-rows-2 pt-8 gap-4 place-items-center md:flex md:flex-col md:items-start">
        <WhiteTile
          src={gameController}
          alt="Game Controller icon"
          header={t("firstTileHeader")}
          content={t("firstTileDescription")}
        />
        <WhiteTile
          src={tradingChart}
          alt="Trading chart icon"
          header={t("thirdTileHeader")}
          content={t("thirdTileescription")}
        />
        <BlueTile
          header={t("secondTileHeader")}
          content={t("secondTileDescription")}
        />
        <WhiteTile
          src={securityIcon}
          alt="Wallet icon"
          header={t("fourthTileHeader")}
          content={t("fourthTileDescription")}
        />
        <WhiteTile
          src={wallet}
          alt="Arrows circle icon"
          header={t("fifthTileHeader")}
          content={t("fifthTileDescription")}
        />
      </div>
    </div>
  );
};

export default AboutSectionTiles;
