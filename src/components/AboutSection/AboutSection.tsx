import React from "react";
import WidthWrapper from "../WidthWrapper";
import { useTranslations } from "next-intl";
import AboutSectionTiles from "./AboutSectionTiles";

const AboutSection = () => {
  const t = useTranslations("AboutSection");

  return (
    <section>
      <WidthWrapper>
        <div className="my-12">
          <div className="text-center md:items-start md:text-start flex justify-center items-center flex-col">
            <h2 className="text-3xl pb-4">{t("headerDescription")}</h2>
            <p className="w-1/3 lg:w-full">{t("paragraphDescription")}</p>
          </div>
          <AboutSectionTiles />
        </div>
      </WidthWrapper>
    </section>
  );
};

export default AboutSection;
