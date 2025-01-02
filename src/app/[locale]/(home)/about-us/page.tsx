import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import AboutUsSection from "@/components/AboutUsComponent/AboutUsSection"
import AboutUsHeader from "@/components/AboutUsComponent/Header"
import AboutUsStepTiles from "@/components/AboutUsComponent/StepTiles"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine } from "@/components/horizontal-line"
import PageWrapper from "@/components/PageWrapper"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "about-us",
  })
  return {
    title: t("aboutUs.title"),
    description: t("aboutUs.description"),
    openGraph: {
      title: t("aboutUs.title"),
      description: t("aboutUs.description"),
    },
    twitter: {
      title: t("aboutUs.title"),
      description: t("aboutUs.description"),
    },
    alternates: alternateUrls,
  }
}

const AboutUs = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <PageWrapper>
      <AboutUsHeader />
      <HorizontalLine variant="1" />
      <AboutUsStepTiles />
      <AboutUsSection />
      <DownloadSection />
    </PageWrapper>
  )
}

export default AboutUs
