import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

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
export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  return {
    title: t("homePage.title"),
    description: t("homePage.description"),
    openGraph: {
      title: t("homePage.title"),
      description: t("homePage.description"),
    },
    twitter: {
      title: t("homePage.title"),
      description: t("homePage.description"),
    },
  }
}

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale)

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
