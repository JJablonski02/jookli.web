import { useTranslations } from "next-intl"
import React from "react"

import { MotionDiv } from "@/components/motion-components/motion-div"

import WidthWrapper from "../../WidthWrapper"
import AboutSectionTiles from "./AboutSectionTiles"

const AboutSection = () => {
  const t = useTranslations("HomePage.AboutSection")

  return (
    <section>
      <WidthWrapper>
        <div className="mx-20 my-12 md:mx-0">
          <MotionDiv className="flex flex-col items-center justify-center space-y-4 text-center md:items-start md:text-start">
            <h2 className="text-3xl">{t("header")}</h2>
            <h3 className="font-PoppinsRegular text-lg">{t("description")}</h3>
          </MotionDiv>
          <AboutSectionTiles />
        </div>
      </WidthWrapper>
    </section>
  )
}

export default AboutSection
