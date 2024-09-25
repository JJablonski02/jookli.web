import React from "react";
import phoneImage from "../../../public/LoadingPhone.svg";
import { useTranslations } from "next-intl";
import Header from "../Header";

const EarnMethodsHeader = () => {
  const t = useTranslations("EarnMethods.Header");

  return (
    <Header
      header={t("headerTitle")}
      headerParagraph={t('headerParagraph')}
      firstButtonLabel={t('downloadIos').toUpperCase()}
      secondButtonLabel={t('downloadAndroid').toUpperCase()}
      src={phoneImage}
    />
  );
};

export default EarnMethodsHeader;
