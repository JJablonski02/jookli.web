import React from 'react'
import StepTile from '../StepTile'
import MachineLearning from '../../../public/MachineLearning.png'
import phoneImage from '../../../public/HiWphone.svg'
import { useTranslations } from 'next-intl'

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
            />
            <StepTile
                className="flex-row-reverse"
                header={t("secondTileHeader")}
                paragraph={t("secondTileParagraph")}
                secondParagraph={t("secondTileExtraParagraph")}
                src={MachineLearning}
                alt={"Machine Learning Image"}
            />
            <StepTile
                header={t("thirdTileHeader")}
                paragraph={t("thirdTileParagraph")}
                secondParagraph={t("thirdTileExtraParagraph")}
                src={phoneImage}
                alt={"Machine Learning Image"}
            />


        </div>
    )
}

export default AboutUsStepTiles