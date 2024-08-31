import React from "react";
import { useTranslations } from "next-intl";
import PageWrapper from "@/components/PageWrapper";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import StepTile from "@/components/HowItWorksComponents/StepTile";
import Header from "@/components/HowItWorksComponents/Header";
import SectionWithBg from "@/components/HowItWorksComponents/SectionWithBg";

const HowItWorks = () => {
  const t = useTranslations('howItWorksPage.StepTile');

  return <PageWrapper>
    <Header/>
    <StepTile
    header={t("firstTileHeader")}
    paragraph={t("firstTileParagraph")}
    secondParagraph={t("firstTileExtraParagraph")}
    step={t('firstStep')}
    />
    <StepTile
    className="flex-row-reverse"
    header={t("secondTileHeader")}
    paragraph={t("secondTileParagraph")}
    secondParagraph={t("secondTileExtraParagraph")}
    step={t('secondStep')}
    />
    <StepTile
    header={t("thirdTileHeader")}
    paragraph={t("thirdTileParagraph")}
    secondParagraph={t("thirdTileExtraParagraph")}
    step={t('thirdStep')}
    />
    <SectionWithBg/>
    <DownloadSection/>
  </PageWrapper>;
};

export default HowItWorks;
