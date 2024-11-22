import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import React from "react"

import { MotionDiv } from "@/components/motion-components/motion-div"
import PageWrapper from "@/components/PageWrapper"
import { SupportForm } from "@/features/report-feature/components/form"

type Props = {
  params: { locale: string }
}

const Support = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations("Support")

  return (
    <PageWrapper>
      <MotionDiv className="mx-auto flex min-h-[400px] w-3/4 flex-col gap-6 py-20">
        <h2>{t("contactWithUs")}</h2>
        <p className="flex max-w-[80%] grow items-center justify-center text-xl md:mt-8 md:max-w-[95%] md:text-center md:text-lg">
          {t("fillDataDescription")}
        </p>
      </MotionDiv>
      <SupportForm />
    </PageWrapper>
  )
}

export default Support
