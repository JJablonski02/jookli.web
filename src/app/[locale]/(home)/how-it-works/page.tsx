import React from "react";
import { useTranslations } from "next-intl";
import PageWrapper from "@/components/PageWrapper";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import StepTile from "@/components/StepTile";
import HowItWorksHeader from "@/components/HowItWorksPageComponents/Header";
import Section from "@/components/HowItWorksPageComponents/Section";
import MachineLearningImage from "../../../../../public/MachineLearning.png"
import { HorizontalLine } from "@/components/horizontal-line";


const HowItWorks = () => {
  const t = useTranslations('HowItWorksPage.StepTile');

  return (
    <PageWrapper>
      <HowItWorksHeader/>
          <HorizontalLine variant="1"/>
          <StepTile
            header={t("firstTileHeader")}
            paragraph={t("firstTileParagraph")}
            secondParagraph={t("firstTileExtraParagraph")}
            step={t('firstStep')}
            src={MachineLearningImage}
            alt={"Machine Learning Image"}
            squaresPosition="left"
            square1Id="square3"
            square2Id="square4"
          />
          <HorizontalLine variant="2"/>
          <StepTile
            className="flex-row-reverse"
            header={t("secondTileHeader")}
            paragraph={t("secondTileParagraph")}
            secondParagraph={t("secondTileExtraParagraph")}
            step={t('secondStep')}
            src={MachineLearningImage}
            alt={"Machine Learning Image"}
            squaresPosition="right"
            square1Id="square5"
            square2Id="square6"
          />
          <HorizontalLine variant="3"/>
          <StepTile
            header={t("thirdTileHeader")}
            paragraph={t("thirdTileParagraph")}
            secondParagraph={t("thirdTileExtraParagraph")}
            step={t('thirdStep')}
            src={MachineLearningImage}
            alt={"Machine Learning Image"}
            squaresPosition="left"
            square1Id="square7"
            square2Id="square8"
          />
          <HorizontalLine variant="4"/>
          <Section />
      <DownloadSection />
    </PageWrapper>
  );
};

export default HowItWorks;
