import { useTranslations } from "next-intl"
import React from "react"

import WidthWrapper from "../WidthWrapper"
import { StepArrow } from "./StepArrow"
import { StepOverview } from "./StepOverview"

const Section = () => {
  const t = useTranslations("HowItWorksPage.Section")

  return (
    <section>
      <WidthWrapper>
        <div className="relative mx-20 my-12 flex justify-end sm:mx-0">
          <div className="flex min-h-[467px] w-4/5 pb-[25px] lg:min-h-[1200px] md:min-h-[1070px]">
            <div className="grow rounded-[162px] bg-white lg:rounded-[100px]" />
            <div className="absolute bottom-0 left-0 flex min-h-[66%] w-11/12 flex-col rounded-2xl bg-blue p-6">
              <div className="mt-4 text-center lg:mb-8">
                <h2 className="text-5xl md:text-3xl">{t("header")}</h2>
              </div>
              <div className="flex grow items-center justify-between lg:flex-col lg:gap-8">
                <StepOverview variant="1" />
                <StepArrow />
                <StepOverview variant="2" />
                <StepArrow />
                <StepOverview variant="3" />
                <StepArrow />
                <StepOverview variant="4" />
                <StepArrow />
                <StepOverview variant="5" />
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Section
