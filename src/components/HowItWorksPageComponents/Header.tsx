import React from "react";
import phoneImage from "../../../public/HiWphone.svg";
import { useTranslations } from "next-intl";
import Header from "../Header";

const HowItWorksHeader = () => {
  const t = useTranslations("HowItWorksPage.Header");

  return (
    <Header
      header={t("headerTitle")}
      headerParagraph={t('headerParagraph')}
      firstButtonLabel={t('downloadIos').toUpperCase()}
      secondButtonLabel={t('downloadAndroid').toUpperCase()}
      src={phoneImage}
      secondSrc={phoneImage}
    />
  );
};

export default HowItWorksHeader;
