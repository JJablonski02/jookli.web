import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"

import { LoginForm } from "./components/login-form"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "sign-in",
  })
  return {
    title: t("signIn.title"),
    description: t("signIn.description"),
    openGraph: {
      title: t("signIn.title"),
      description: t("signIn.description"),
    },
    twitter: {
      title: t("signIn.title"),
      description: t("signIn.description"),
    },
    alternates: alternateUrls,
  }
}

const SignIn: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <LoginForm />
}

export default SignIn
