import React from "react"

import AboutUsSection from "@/components/AboutUsComponent/AboutUsSection"
import AboutUsHeader from "@/components/AboutUsComponent/Header"
import AboutUsStepTiles from "@/components/AboutUsComponent/StepTiles"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine } from "@/components/horizontal-line"
import PageWrapper from "@/components/PageWrapper"

const AboutUs = () => {
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
