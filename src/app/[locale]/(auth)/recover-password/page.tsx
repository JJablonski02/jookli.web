import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { RecoverPasswordPage } from "@/features/recover-password-feature/recover-password-page"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "recover-password",
  })
  return {
    title: t("recoverPassword.title"),
    description: t("recoverPassword.description"),
    openGraph: {
      title: t("recoverPassword.title"),
      description: t("recoverPassword.description"),
    },
    twitter: {
      title: t("recoverPassword.title"),
      description: t("recoverPassword.description"),
    },
    alternates: alternateUrls,
  }
}

const VerifyEmail: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <RecoverPasswordPage />
}

export default VerifyEmail
