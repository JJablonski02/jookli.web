import { unstable_setRequestLocale } from "next-intl/server"

import AboutSection from "@/components/HomePageComponents/AboutSection/AboutSection"
import { Benefits } from "@/components/HomePageComponents/Benefits"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import HomePageHeader from "@/components/HomePageComponents/Header"
import HowItWorksSection from "@/components/HomePageComponents/HowItWorksSection"
import SectionImageBlueBg from "@/components/HomePageComponents/SectionImageBlueBg"
import { TrustedUsCarousel } from "@/components/HomePageComponents/TrustedUs/TrustedUsCarousel"
import WCSSection from "@/components/HomePageComponents/WCSSection/WCSSection"
import PageWrapper from "@/components/PageWrapper"

type Props = {
  params: { locale: string }
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <PageWrapper>
      <HomePageHeader />
      <TrustedUsCarousel />
      <AboutSection />
      <HowItWorksSection />
      <WCSSection />
      <SectionImageBlueBg />
      <Benefits />
      <DownloadSection />
    </PageWrapper>
  )
}
