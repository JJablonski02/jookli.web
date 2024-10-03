import React from "react";
import { useTranslations } from "next-intl";
import PageWrapper from "@/components/PageWrapper";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";
import StepTile from "@/components/StepTile";
import HowItWorksHeader from "@/components/HowItWorksPageComponents/Header";
import Section from "@/components/HowItWorksPageComponents/Section";
import MachineLearningImage from "../../../../../public/MachineLearning.png"
import { HorizontalLane } from "@/components/horizontal-lane";

const HowItWorks = () => {
  const t = useTranslations('HowItWorksPage.StepTile');

  return (
    <PageWrapper>
      <HowItWorksHeader/>
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
        <HorizontalLane idBegin="square3" idEnd="square5"/>
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
      <Section />
      <DownloadSection />
    </PageWrapper>
  );
};

export default HowItWorks;
