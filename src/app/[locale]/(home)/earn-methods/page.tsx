import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import EarnMethodsHeader from "@/components/EarnMethodsComponent/Header"
import Section from "@/components/EarnMethodsComponent/Section"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import { HorizontalLine2 } from "@/components/horizontal-line2"
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
    pageUrl: "earn-methods",
  })
  return {
    title: t("earnMethods.title"),
    description: t("earnMethods.description"),
    openGraph: {
      title: t("earnMethods.title"),
      description: t("earnMethods.description"),
    },
    twitter: {
      title: t("earnMethods.title"),
      description: t("earnMethods.description"),
    },
    alternates: alternateUrls,
  }
}

const EarnMethods = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <PageWrapper>
      <EarnMethodsHeader />
      <HorizontalLine2 variant="1" />
      <Section />
      <HorizontalLine2 variant="2" />
      <DownloadSection betterStyling />
    </PageWrapper>
  )
}

export default EarnMethods
