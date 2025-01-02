import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import React from "react"

import { MotionDiv } from "@/components/motion-components/motion-div"
import PageWrapper from "@/components/PageWrapper"
import { GenerateMetadataAlternateUrls } from "@/configs/metadata-generators"
import { SupportForm } from "@/features/report-feature/components/form"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const alternateUrls = GenerateMetadataAlternateUrls({
    pageUrl: "support",
  })
  return {
    title: t("support.title"),
    description: t("support.description"),
    openGraph: {
      title: t("support.title"),
      description: t("support.description"),
    },
    twitter: {
      title: t("support.title"),
      description: t("support.description"),
    },
    alternates: alternateUrls,
  }
}

const Support = ({ params: { locale } }: Props) => {
  setRequestLocale(locale)
  const t = useTranslations("Support")

  return (
    <PageWrapper>
      <MotionDiv className="mx-auto flex w-3/4 flex-col gap-6 py-10">
        <h2>{t("contactWithUs")}</h2>
        <p className="flex max-w-[80%] grow md:max-w-full">
          {t("fillDataDescription")}
        </p>
      </MotionDiv>
      <SupportForm />
    </PageWrapper>
  )
}

export default Support
