import EarnMethodsHeader from "@/components/EarnMethodsComponent/Header";
import Section from "@/components/EarnMethodsComponent/Section";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import { HorizontalLine2 } from "@/components/horizontal-line2";
import PageWrapper from "@/components/PageWrapper";
import { useTranslations } from "next-intl";
import React from "react";

const EarnMethods = () => {
  const t = useTranslations('EarnMethods')

  return (
    <PageWrapper>
      <EarnMethodsHeader/>
      <HorizontalLine2 variant="1"/>
      <Section/>
      <HorizontalLine2 variant="2"/>
      <DownloadSection betterStyling/>
    </PageWrapper>
  );
};

export default EarnMethods;
