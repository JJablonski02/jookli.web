import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { TypesOfCookiesPage } from "@/features/cookies-policy-feature/subpages/types-of-cookies/types-of-cookies-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "types-of-cookies",
  })
  return {
    title: t("typesOfCookies.title"),
    description: t("typesOfCookies.description"),
    openGraph: {
      title: t("typesOfCookies.title"),
      description: t("typesOfCookies.description"),
    },
    twitter: {
      title: t("typesOfCookies.title"),
      description: t("typesOfCookies.description"),
    },
    alternates: alternateUrls,
  }
}

const TypesOfCookies = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <TypesOfCookiesPage />
    </CookiesLayout>
  )
}

export default TypesOfCookies
