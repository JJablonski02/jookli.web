import React from "react";
import WidthWrapper from "../WidthWrapper";
import { useTranslations } from "next-intl";

const SectionImageBlueBg = () => {
  const t = useTranslations("HomePage.SectionImageBlueBg");
  return (
    <section className="bg-blue">
      <WidthWrapper>
        <div className="px-20 py-10 my-12 flex text-center md:flex md:flex-col gap-4 md:px-0">
          <div className="flex justify-start md:items-center flex-col md:w-full">
            <h2 className="text-3xl text-primary text-start md:text-center">
              {t("headerDescription")}
            </h2>
            <p className="mt-10 text-start w-1/2 md:text-center md:w-full">
              {t("paragraphDescription")}
            </p>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default SectionImageBlueBg;
