import React from 'react'
import MachineLearning from '../../../public/MachineLearning.png'
import phoneImage from '../../../public/HiWphone.svg'
import { useTranslations } from 'next-intl'
import StepTile from '../StepTile'

const AboutUsStepTiles = () => {
    const t = useTranslations('AboutUs.StepTile')

    return (
        <div>
            <StepTile
                header={t("firstTileHeader")}
                paragraph={t("firstTileParagraph")}
                secondParagraph={t("firstTileExtraParagraph")}
                src={MachineLearning}
                alt={"Machine Learning Image"}
                square1Id='square1'
                square2Id='square2'
                squaresPosition='left'
                stepType='1'
            />
            <StepTile
                className="flex-row-reverse"
                header={t("secondTileHeader")}
                paragraph={t("secondTileParagraph")}
                secondParagraph={t("secondTileExtraParagraph")}
                src={MachineLearning}
                alt={"Machine Learning Image"}
                square1Id='square1'
                square2Id='square2'
                squaresPosition='left'
                stepType='1'
            />
            <StepTile
                header={t("thirdTileHeader")}
                paragraph={t("thirdTileParagraph")}
                secondParagraph={t("thirdTileExtraParagraph")}
                src={phoneImage}
                alt={"Machine Learning Image"}
                square1Id='square1'
                square2Id='square2'
                squaresPosition='left'
                stepType='1'
            />


        </div>
    )
}

export default AboutUsStepTiles