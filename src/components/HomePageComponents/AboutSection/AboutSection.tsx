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
            <h3>{t("header")}</h3>
            <p>{t("description")}</p>
          </MotionDiv>
          <AboutSectionTiles />
        </div>
      </WidthWrapper>
    </section>
  )
}

export default AboutSection
