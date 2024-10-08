import { useTranslations } from "next-intl"
import React from "react"

import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine } from "@/components/horizontal-line"
import HowItWorksHeader from "@/components/HowItWorksPageComponents/Header"
import Section from "@/components/HowItWorksPageComponents/Section"
import PageWrapper from "@/components/PageWrapper"
import StepTile from "@/components/StepTile"

import analyticsScreen from "../../../../../public/analytics-screen.svg"
import registerScreen from "../../../../../public/register-screen.svg"
import strategySelection from "../../../../../public/strategy-selection.svg"

const HowItWorks = () => {
  const t = useTranslations("HowItWorksPage.StepTile")

  return (
    <PageWrapper>
      <HowItWorksHeader />
      <HorizontalLine variant="1" />
      <StepTile
        stepType="1"
        header={t("firstTileHeader")}
        paragraph={t("firstTileParagraph")}
        secondParagraph={t("firstTileExtraParagraph")}
        step={t("firstStep")}
        src={registerScreen}
        alt="Machine Learning Image"
        squaresPosition="left"
        square1Id="square3"
        square2Id="square4"
      />
      <HorizontalLine variant="2" />
      <StepTile
        stepType="2"
        className="flex-row-reverse"
        header={t("secondTileHeader")}
        paragraph={t("secondTileParagraph")}
        secondParagraph={t("secondTileExtraParagraph")}
        step={t("secondStep")}
        src={strategySelection}
        alt="Machine Learning Image"
        squaresPosition="right"
        square1Id="square5"
        square2Id="square6"
      />
      <HorizontalLine variant="3" />
      <StepTile
        stepType="3"
        header={t("thirdTileHeader")}
        paragraph={t("thirdTileParagraph")}
        secondParagraph={t("thirdTileExtraParagraph")}
        step={t("thirdStep")}
        src={analyticsScreen}
        alt="Machine Learning Image"
        squaresPosition="left"
        square1Id="square7"
        square2Id="square8"
      />
      <HorizontalLine variant="4" />
      <Section />
      <DownloadSection />
    </PageWrapper>
  )
}

export default HowItWorks
