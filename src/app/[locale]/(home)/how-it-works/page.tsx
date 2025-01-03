import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine } from "@/components/horizontal-line"
import HowItWorksHeader from "@/components/HowItWorksPageComponents/Header"
import Section from "@/components/HowItWorksPageComponents/Section"
import PageWrapper from "@/components/PageWrapper"
import StepTile from "@/components/StepTile"
import WidthWrapper from "@/components/WidthWrapper"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"

import analyticsScreen from "../../../../../public/analytics-screen.svg"
import registerScreen from "../../../../../public/register-screen.svg"
import strategySelection from "../../../../../public/strategy-selection.svg"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "how-it-works",
  })
  return {
    title: t("howItWorks.title"),
    description: t("howItWorks.description"),
    openGraph: {
      title: t("howItWorks.title"),
      description: t("howItWorks.description"),
    },
    twitter: {
      title: t("howItWorks.title"),
      description: t("howItWorks.description"),
    },
    alternates: alternateUrls,
  }
}

const HowItWorks = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)
  const t = useTranslations("HowItWorksPage.StepTile")

  return (
    <PageWrapper>
      <HowItWorksHeader />
      <HorizontalLine variant="1" />
      <div className="hidden self-center lg:flex">
        <WidthWrapper className="flex justify-center">
          <h2 className="self-center text-center text-2xl lg:w-3/4 md:w-full">
            {t("startEarningBy3Steps")}
          </h2>
        </WidthWrapper>
      </div>
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
