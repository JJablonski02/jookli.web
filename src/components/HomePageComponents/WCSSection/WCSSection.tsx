import React from "react";
import WidthWrapper from "../../WidthWrapper";
import { WCSData } from "./WCSData";
import { useTranslations } from "next-intl";
import JPDownloadButton from "../../JPDownloadButton";
import { EmblaCarousel } from "@/components/EmblaCarouselComponent/EmblaCarousel";


const WCSSection = () => {
  const t = useTranslations("HomePage.WCSSection");

  return (
    <section>
      <div className="mb-10">
        <div className="px-2.5 mt-24 flex justify-center items-center flex-col text-center">
          <div className=" flex flex-row justify-evenly items-center w-full md:flex-col md:gap-4">
            <h2 className="text-4xl font-PoppinsSemiBold">
              {t("headerDescription")}
            </h2>
            <JPDownloadButton className="text-primary p-6 bg-blue md:h-14 md:w-4/5" />
          </div>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  );
};

export default WCSSection;
