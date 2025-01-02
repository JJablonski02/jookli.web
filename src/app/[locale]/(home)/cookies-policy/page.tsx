import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { CookiesPolicyPage } from "@/features/cookies-policy-feature/cookies-policy-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "cookies-policy",
  })
  return {
    title: t("cookiesPolicy.title"),
    description: t("cookiesPolicy.description"),
    openGraph: {
      title: t("cookiesPolicy.title"),
      description: t("cookiesPolicy.description"),
    },
    twitter: {
      title: t("cookiesPolicy.title"),
      description: t("cookiesPolicy.description"),
    },
    alternates: alternateUrls,
  }
}

const CookiesPolicy = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <CookiesPolicyPage />
    </CookiesLayout>
  )
}

export default CookiesPolicy
