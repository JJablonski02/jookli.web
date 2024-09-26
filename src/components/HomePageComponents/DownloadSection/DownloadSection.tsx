import React from "react";
import WidthWrapper from "../../WidthWrapper";
import { useTranslations } from "next-intl";
import Tile from "./Tile";
import JPButton from "../../buttons/JPButton";

const DownloadSection = () => {
  const t = useTranslations("HomePage.DownloadSection");
  return (
    <section>
      <WidthWrapper>
        <div className="my-12 mx-20 md:mx-0">
          <div className="mb-8">
            <h2 className="text-3xl md:pb-4">{t("headerDescription")}</h2>
          </div>
          <div className="flex md:flex-col gap-8">
            <Tile
              header={t("tileHeader", { appName: "iOS" })}
              description={t("leftTileDescription")}
              type='ios'
              children={
                <JPButton
                  iconType="apple"
                  alt="appStore icon"
                  className="text-primary p-6 bg-blue rounded-full flex flex-row gap-2 md:h-14 md:w-1/2"
                  label="App Store"
                />
              }
            />
            <Tile
              header={t("tileHeader", { appName: "Android" })}
              description={t("rightTileDescription")}
              type='android'
              children={
                <JPButton
                  iconType="googlePlayStore"
                  alt="playStore icon"
                  className="text-primary p-6 bg-blue rounded-full flex flex-row gap-2 md:h-14 md:w-1/2"
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
