import { useTranslations } from "next-intl"
import React from "react"

import phoneImage from "../../../public/HiWphone.svg"
import Header from "../Header"

const HowItWorksHeader = () => {
  const t = useTranslations("HowItWorksPage.Header")

  return (
    <Header
      header={t("headerTitle")}
      headerParagraph={t("headerParagraph")}
      firstButtonLabel={t("downloadIos").toUpperCase()}
      secondButtonLabel={t("downloadAndroid").toUpperCase()}
      src={phoneImage}
      secondSrc={phoneImage}
      square1Id="square1"
      square2Id="square2"
    />
  )
}

export default HowItWorksHeader
