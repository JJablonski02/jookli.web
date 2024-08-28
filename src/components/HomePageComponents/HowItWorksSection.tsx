import React from "react";
import Image from "next/image";
import WidthWrapper from "../WidthWrapper";
import { useTranslations } from "next-intl";
import smallGameController from '../../../public/smallGameController.svg';
import documentSvg from '../../../public/document.svg';
import videoSvg from '../../../public/video.svg';
import shoppingCart from "../../../public/shoppingCart.svg";
import phoneImage from "../../../public/phoneImage.png";

const HowItWorksSection = () => {
  const t = useTranslations("HowItWorksSection");
  return (
    <section>
      <WidthWrapper>
        <div className="mx-40 my-16 lg:mt-10 mb-20 lg:mx-0 flex justify-evenly items-center  md:flex md:flex-col gap-20 text-start">
          <div className="lg:hidden">
            <Image src={phoneImage} alt="logo svg" width={400} height={600} />
          </div>
          <div className="w-3/4">
            <div className="">
              <h2 className="text-3xl text-primary">{t("headerDescription")}</h2>
              <p className="mt-8 lg:mt-6">
                {t("paragraphDescription")}
              </p>
              <p className="mt-6 lg:mt-4">
                {t("listDescription")}
              </p>
            </div>
            <div className="flex flex-col pt-4 lg:pt-4 gap-4 place-items-start">
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image src={smallGameController} alt="svg icon"/>
                </div>
                <p>{t("firstListDescription")}</p>
              </div>
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image src={documentSvg} alt="svg icon"/>
                </div>
                <p>{t("secondListDescription")}</p>
              </div>
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image src={videoSvg} alt="svg icon"/>
                </div>
                <p>{t("thirdListDescription")}</p>
              </div>
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image src={shoppingCart} alt="svg icon"/>
                </div>
                <p>{t("fourthListDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default HowItWorksSection;
