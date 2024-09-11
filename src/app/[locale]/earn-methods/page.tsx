import EarnMethodsHeader from "@/components/EarnMethodsComponent/Header";
import Section from "@/components/EarnMethodsComponent/Section";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import PageWrapper from "@/components/PageWrapper";
import { useTranslations } from "next-intl";
import React from "react";

const EarnMethods = () => {
  const t = useTranslations('EarnMethods')

  return (
    <PageWrapper>
      <EarnMethodsHeader/>
      <Section/>
      <DownloadSection/>
    </PageWrapper>
  );
};

export default EarnMethods;
