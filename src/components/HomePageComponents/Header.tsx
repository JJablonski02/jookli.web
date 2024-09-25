import React from "react";
import phoneImage from "../../../public/HomePagePhone.svg";
import { useTranslations } from "next-intl";
import Header from "../Header";

const HomePageHeader = () => {
  const t = useTranslations("HomePage.Header");

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

export default HomePageHeader;
