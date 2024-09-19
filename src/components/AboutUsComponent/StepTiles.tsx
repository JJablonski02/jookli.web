import React from 'react'
import StepTile from '../StepTile'
import MachineLearning from '../../../public/MachineLearning.png'
import phoneImage from '../../../public/HiWphone.svg'

const AboutUsStepTiles = () => {
    return (
        <div>
            <StepTile
                header=''
                paragraph=''
                secondParagraph=''
                src={MachineLearning}
                alt=''
            />
            <StepTile
                className='flex-row-reverse'
                header=''
                paragraph=''
                secondParagraph=''
                src={MachineLearning}
                alt=''
            />
            <StepTile
                header=''
                paragraph=''
                secondParagraph=''
                src={phoneImage}
                alt=''
            />
        </div>
    )
}

export default AboutUsStepTiles