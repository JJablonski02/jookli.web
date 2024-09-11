import React from "react";
import WidthWrapper from "../../WidthWrapper";
import { useTranslations } from "next-intl";
import AboutSectionTiles from "./AboutSectionTiles";

const AboutSection = () => {
  const t = useTranslations("HomePage.AboutSection");

  return (
    <section>
      <WidthWrapper>
        <div className="my-12">
          <div className="text-center md:items-start md:text-start flex justify-center items-center flex-col">
            <h2 className="text-3xl pb-4">{t("headerDescription")}</h2>
          </div>
          <AboutSectionTiles />
        </div>
      </WidthWrapper>
    </section>
  );
};

export default AboutSection;
