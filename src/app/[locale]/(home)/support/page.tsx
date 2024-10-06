import React from "react";
import { SupportForm } from "./components/form";
import { useTranslations } from "next-intl";
import WidthWrapper from "@/components/WidthWrapper";
import PageWrapper from "@/components/PageWrapper";

const Support = () => {

  const t = useTranslations("Support");

  return (
    <PageWrapper>
        <div className="min-h-[400px] w-3/4 flex flex-col mx-auto py-20">
          <h2 className="text-4xl md:text-center md:text-3xl">{t('contactWithUs')}</h2>
          <p className="text-xl md:text-lg max-w-[80%] flex flex-grow items-center justify-center md:max-w-[95%] md:text-center md:mt-8">{t('fillDataDescription')}</p>
        </div>
      <SupportForm/>
    </PageWrapper>
  )
};

export default Support;
