import React from "react";
import WidthWrapper from "../../WidthWrapper";
import { useTranslations } from "next-intl";
import AboutSectionTiles from "./AboutSectionTiles";

const AboutSection = () => {
  const t = useTranslations("HomePage.AboutSection");

  return (
    <section>
      <WidthWrapper>
        <div className="my-12 mx-20 md:mx-0">
          <div className="text-center md:items-start md:text-start flex justify-center items-center flex-col space-y-4">
            <h2 className="text-3xl">{t("header")}</h2>
            <h3 className="text-lg font-PoppinsRegular" >{t('description')}</h3>
          </div>
          <AboutSectionTiles />
        </div>
      </WidthWrapper>
    </section>
  );
};

export default AboutSection;
