import React from "react";
import phoneImage from "../../../public/HomePagePhone.svg";
import { useTranslations } from "next-intl";
import Header from "../Header";

const HomePageHeader = () => {
  const t = useTranslations("HomePage.Header");

  return (
      //   <div className="-z-10 lg:hidden">
    //   <span className="border-[5px] border-blue w-[381px] h-[381px] absolute rounded-[54px] rotate-45 -right-40 top-16"></span>
    //   <span className="border-[5px] border-blue w-[381px] h-[381px] absolute rounded-[54px] rotate-45 -right-60 top-16"></span>
    // </div>
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
