import { useTranslations } from "next-intl"
import React from "react"

import PageWrapper from "@/components/PageWrapper"

import { SupportForm } from "./components/form"

const Support = () => {
  const t = useTranslations("Support")

  return (
    <PageWrapper>
      <div className="mx-auto flex min-h-[400px] w-3/4 flex-col py-20">
        <h2 className="text-4xl md:text-center md:text-3xl">
          {t("contactWithUs")}
        </h2>
        <p className="flex max-w-[80%] grow items-center justify-center text-xl md:mt-8 md:max-w-[95%] md:text-center md:text-lg">
          {t("fillDataDescription")}
        </p>
      </div>
      <SupportForm />
    </PageWrapper>
  )
}

export default Support
