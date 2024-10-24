import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import documentSvg from "../../../public/document.svg"
import shoppingCart from "../../../public/shoppingCart.svg"
import smallGameController from "../../../public/smallGameController.svg"
import videoSvg from "../../../public/video.svg"
import { MotionDiv } from "../motion-components/motion-div"
import { PhoneImage } from "../phone-image"
import { Squares } from "../Squares"

const HowItWorksSection = () => {
  const t = useTranslations("HomePage.HowItWorksSection")
  return (
    <section>
      <Squares position="left">
        <div className="flex w-full items-center justify-evenly gap-20 text-start lg:mx-0 lg:flex lg:flex-col-reverse lg:gap-6">
          <PhoneImage phoneType="dashboard-phone" />
          <MotionDiv className="w-3/4 md:w-full">
            <div>
              <h2 className="text-4xl text-primary">
                {t("headerDescription")}
              </h2>
              <p className="mt-8 w-3/4 lg:mt-6 md:w-full">
                {t("paragraphDescription")}
              </p>
              <p className="mt-6 lg:mt-6">{t("listDescription")}</p>
            </div>
            <div className="flex flex-col place-items-start gap-4 pt-4 lg:pt-4">
              <div className="flex flex-row items-center justify-center">
                <div className="mr-4 rounded-xl bg-blue p-2">
                  <Image src={smallGameController} alt="svg icon" />
                </div>
                <p>{t("firstListDescription")}</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="mr-4 rounded-xl bg-blue p-2">
                  <Image src={documentSvg} alt="svg icon" />
                </div>
                <p>{t("secondListDescription")}</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="mr-4 rounded-xl bg-blue p-2">
                  <Image src={videoSvg} alt="svg icon" />
                </div>
                <p>{t("thirdListDescription")}</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="mr-4 rounded-xl bg-blue p-2">
                  <Image src={shoppingCart} alt="svg icon" />
                </div>
                <p>{t("fourthListDescription")}</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Squares>
    </section>
  )
}

export default HowItWorksSection
