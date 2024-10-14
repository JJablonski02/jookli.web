"use client"

import { useTranslations } from "next-intl"
import React from "react"

import gameController from "../../../../public/gameController.svg"
import securityIcon from "../../../../public/securityIcon.svg"
import tradingChart from "../../../../public/tradingChart.svg"
import wallet from "../../../../public/wallet.svg"
import BlueTile from "./BlueTile"
import WhiteTile from "./WhiteTile"

const AboutSectionTiles = () => {
  const t = useTranslations("HomePage.AboutSectionTiles")

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-4 pt-8 lg:flex lg:flex-col lg:items-start lg:gap-8">
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
  )
}

export default AboutSectionTiles
