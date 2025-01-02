import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { LocationDataPage } from "@/features/cookies-policy-feature/subpages/location-data/location-data-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "location-data",
  })
  return {
    title: t("locationData.title"),
    description: t("locationData.description"),
    openGraph: {
      title: t("locationData.title"),
      description: t("locationData.description"),
    },
    twitter: {
      title: t("locationData.title"),
      description: t("locationData.description"),
    },
    alternates: alternateUrls,
  }
}

const LocationData = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <LocationDataPage />
    </CookiesLayout>
  )
}

export default LocationData
