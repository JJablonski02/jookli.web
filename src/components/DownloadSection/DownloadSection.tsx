import React from "react";
import WidthWrapper from "../WidthWrapper";
import { useTranslations } from "next-intl";
import Tile from "./Tile";
import JPButton from "../JPButton";

const DownloadSection = () => {
  const t = useTranslations("DownloadSection");
  return (
    <section>
      <WidthWrapper>
        <div className="mx-20">
          <div className="mb-8 flex flex-row justify-between">
            <h2 className="text-3xl">{t("headerDescription")}</h2>
            <p className="text-sm w-1/3">{t("paragraphDescription")}</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Tile
              header={t("tileHeader", { appName: "iOS" })}
              description={t("leftTileDescription")}
              children={
                <JPButton
                  imageType="appStore"
                  alt="appStore icon"
                  className="text-primary bg-blue rounded-3xl flex flex-row gap-2"
                  label="App Store"
                />
              }
            />
            <Tile
              header={t("tileHeader", { appName: "Android" })}
              description={t("rightTileDescription")}
              children={
                <JPButton
                  imageType="playStore"
                  alt="playStore icon"
                  className="text-primary bg-blue rounded-3xl flex flex-row gap-2"
                  label="Play Store"
                />
              }
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default DownloadSection;
