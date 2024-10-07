import React from 'react'
import StepTile from '../../components/StepTile'
import MachineLearning from '../../../public/MachineLearning.png'
import phoneImage from '../../../public/HiWphone.svg'
import { useTranslations } from 'next-intl'
import { HorizontalLine } from '../horizontal-line'
import Image from 'next/image'

const AboutUsStepTiles = () => {
    const t = useTranslations('AboutUs.StepTile')

    return (
        <div>
            <StepTile
                header={t("firstTileHeader")}
                paragraph={t("firstTileParagraph")}
                secondParagraph={t("firstTileExtraParagraph")}
                alt={"Jakub_Jablonski_image"}
                squaresPosition='left'
                customContent={
                    <div className='max-w-[500px] max-h-[500px] md:flex-grow md:h-full bg-secondary-light'> /** TODO */
                    <Image src={MachineLearning} alt="Jakub_Jablonski_image" className='flex-grow'/>
                </div>
                }
                            />
            <HorizontalLine variant='2' />
            <StepTile
                className="flex-row-reverse"
                header={t("secondTileHeader")}
                paragraph={t("secondTileParagraph")}
                secondParagraph={t("secondTileExtraParagraph")}
                src={MachineLearning}
                alt={"Machine Learning Image"}
                stepType='2'
                squaresPosition='right'
            />
            <HorizontalLine variant='3' />
            <StepTile
                header={t("thirdTileHeader")}
                paragraph={t("thirdTileParagraph")}
                secondParagraph={t("thirdTileExtraParagraph")}
                src={phoneImage}
                alt={"Machine Learning Image"}
                squaresPosition='left'
                stepType='3'
            />
            <HorizontalLine variant='4' />
        </div>
    )
}

export default AboutUsStepTiles