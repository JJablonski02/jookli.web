import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { AdvertisingPage } from "@/features/cookies-policy-feature/subpages/advertising/advertising-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "advertising",
  })
  return {
    title: t("advertising.title"),
    description: t("advertising.description"),
    openGraph: {
      title: t("advertising.title"),
      description: t("advertising.description"),
    },
    twitter: {
      title: t("advertising.title"),
      description: t("advertising.description"),
    },
    alternates: alternateUrls,
  }
}

const Advertising = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <AdvertisingPage />
    </CookiesLayout>
  )
}

export default Advertising
