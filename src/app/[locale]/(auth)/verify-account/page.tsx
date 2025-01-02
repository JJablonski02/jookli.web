import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { VerifyAccountCard } from "@/features/verify-account-feature/verify-account-card"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "verify-account",
  })
  return {
    title: t("verifyAccount.title"),
    description: t("verifyAccount.description"),
    openGraph: {
      title: t("verifyAccount.title"),
      description: t("verifyAccount.description"),
    },
    twitter: {
      title: t("verifyAccount.title"),
      description: t("verifyAccount.description"),
    },
    alternates: alternateUrls,
  }
}

const VerifyAccount: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <VerifyAccountCard />
}

export default VerifyAccount
