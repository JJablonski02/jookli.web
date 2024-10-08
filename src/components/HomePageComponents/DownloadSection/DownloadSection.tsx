import { useTranslations } from "next-intl"
import React from "react"

import JPButton from "../../buttons/JPButton"
import WidthWrapper from "../../WidthWrapper"
import Tile from "./Tile"

interface IDownloadSection {
  betterStyling?: boolean
}

const DownloadSection: React.FC<IDownloadSection> = ({ betterStyling }) => {
  const t = useTranslations("HomePage.DownloadSection")
  return (
    <section>
      <WidthWrapper>
        <div
          className={`mx-20 my-12 lg:mt-12 md:mx-0 ${betterStyling && "relative mt-0 md:mt-12"}`}
        >
          <div
            className={`mb-12 md:mb-6 ${betterStyling && "absolute left-0 top-[-80px] lg:static"}`}
          >
            <h2 className="text-3xl md:pb-4">{t("headerDescription")}</h2>
          </div>
          <div className="flex gap-8 md:flex-col">
            <Tile
              header={t("tileHeader", { appName: "iOS" })}
              description={t("leftTileDescription")}
              type="ios"
              children={
                <JPButton
                  iconType="apple"
                  alt="appStore icon"
                  className="flex flex-row gap-2 rounded-full bg-blue p-6 text-primary md:h-14 md:w-1/2"
                  label="App Store"
                />
              }
            />
            <Tile
              header={t("tileHeader", { appName: "Android" })}
              description={t("rightTileDescription")}
              type="android"
              children={
                <JPButton
                  iconType="googlePlayStore"
                  alt="playStore icon"
                  className="flex flex-row gap-2 rounded-full bg-blue p-6 text-primary md:h-14 md:w-1/2"
                  label="Play Store"
                />
              }
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default DownloadSection
