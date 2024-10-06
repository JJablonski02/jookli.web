import React from "react";
import { SupportForm } from "./components/form";
import { useTranslations } from "next-intl";
import WidthWrapper from "@/components/WidthWrapper";
import PageWrapper from "@/components/PageWrapper";

const Support = () => {

  const t = useTranslations("Support");

  return (
    <PageWrapper>
        <div className="h-[400px] mx-20 flex flex-col py-20">
          <h2 className="text-4xl">{t('contactWithUs')}</h2>
          <p className="text-xl max-w-[80%] flex flex-grow items-center justify-center">{t('fillDataDescription')}</p>
        </div>
      <SupportForm/>
    </PageWrapper>
  )
};

export default Support;
