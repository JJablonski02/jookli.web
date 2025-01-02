import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { UsersTransferDataPage } from "@/features/cookies-policy-feature/subpages/users-transfer-data/users-transfer-data-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "users-transfer-data",
  })
  return {
    title: t("usersTransferData.title"),
    description: t("usersTransferData.description"),
    openGraph: {
      title: t("usersTransferData.title"),
      description: t("usersTransferData.description"),
    },
    twitter: {
      title: t("usersTransferData.title"),
      description: t("usersTransferData.description"),
    },
    alternates: alternateUrls,
  }
}

const UsersTransferData = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <UsersTransferDataPage />
    </CookiesLayout>
  )
}

export default UsersTransferData
