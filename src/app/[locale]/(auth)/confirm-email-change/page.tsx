import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { ConfirmEmailChangePage } from "@/features/confirm-email-change-feature/confirm-email-change-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "confirm-email-change",
  })
  return {
    title: t("confirmEmailChange.title"),
    description: t("confirmEmailChange.description"),
    openGraph: {
      title: t("confirmEmailChange.title"),
      description: t("confirmEmailChange.description"),
    },
    twitter: {
      title: t("confirmEmailChange.title"),
      description: t("confirmEmailChange.description"),
    },
    alternates: alternateUrls,
  }
}

const ConfirmEmailChange: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <ConfirmEmailChangePage />
}

export default ConfirmEmailChange
