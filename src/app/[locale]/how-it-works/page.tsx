import React from "react";
import { useTranslations } from "next-intl";
import PageWrapper from "@/components/PageWrapper";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import StepTile from "@/components/StepTile";
import HowItWorksHeader from "@/components/HowItWorksPageComponents/Header";
import Section from "@/components/HowItWorksPageComponents/Section";
import MachineLearningImage from "../../../../public/MachineLearning.png"

const HowItWorks = () => {
  const t = useTranslations('HowItWorksPage.StepTile');

  return (
    <PageWrapper>
      <HowItWorksHeader />
      <StepTile
        header={t("firstTileHeader")}
        paragraph={t("firstTileParagraph")}
        secondParagraph={t("firstTileExtraParagraph")}
        step={t('firstStep')}
        src={MachineLearningImage}
        alt={"Machine Learning Image"}
      />
      <StepTile
        className="flex-row-reverse"
        header={t("secondTileHeader")}
        paragraph={t("secondTileParagraph")}
        secondParagraph={t("secondTileExtraParagraph")}
        step={t('secondStep')}
        src={MachineLearningImage}
        alt={"Machine Learning Image"}
      />
      <StepTile
        header={t("thirdTileHeader")}
        paragraph={t("thirdTileParagraph")}
        secondParagraph={t("thirdTileExtraParagraph")}
        step={t('thirdStep')}
        src={MachineLearningImage}
        alt={"Machine Learning Image"}
      />
      <Section />
      <DownloadSection />
    </PageWrapper>
  );
};

export default HowItWorks;
