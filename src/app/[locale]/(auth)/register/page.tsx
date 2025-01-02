import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"

import { RegisterForm } from "./components/register-form"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "register",
  })
  return {
    title: t("register.title"),
    description: t("register.description"),
    openGraph: {
      title: t("register.title"),
      description: t("register.description"),
    },
    twitter: {
      title: t("register.title"),
      description: t("register.description"),
    },
    alternates: alternateUrls,
  }
}

const Register: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale)
  return <RegisterForm />
}

export default Register
