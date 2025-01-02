import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { CookiesLayout } from "@/components/layouts/cookies-layout"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { ManagingUserDataPage } from "@/features/cookies-policy-feature/subpages/managing-user-data/managing-user-data-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "managing-users-data",
  })
  return {
    title: t("managingUsersData.title"),
    description: t("managingUsersData.description"),
    openGraph: {
      title: t("managingUsersData.title"),
      description: t("managingUsersData.description"),
    },
    twitter: {
      title: t("managingUsersData.title"),
      description: t("managingUsersData.description"),
    },
    alternates: alternateUrls,
  }
}

const ManagingUsersData = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)

  return (
    <CookiesLayout>
      <ManagingUserDataPage />
    </CookiesLayout>
  )
}

export default ManagingUsersData
