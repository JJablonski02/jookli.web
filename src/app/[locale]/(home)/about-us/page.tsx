import { unstable_setRequestLocale } from "next-intl/server"
import React from "react"

import AboutUsSection from "@/components/AboutUsComponent/AboutUsSection"
import AboutUsHeader from "@/components/AboutUsComponent/Header"
import AboutUsStepTiles from "@/components/AboutUsComponent/StepTiles"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine } from "@/components/horizontal-line"
import PageWrapper from "@/components/PageWrapper"

type Props = {
  params: { locale: string }
}

const AboutUs = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)

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
