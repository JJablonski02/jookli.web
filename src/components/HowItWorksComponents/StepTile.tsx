import React from 'react'
import WidthWrapper from '../WidthWrapper'
import Image from 'next/image'

interface StepTileProps {
    className?: string;
    header: string;
    paragraph: string;
    secondParagraph: string;
    step: string;
    alt?: string;
    image?: string;
}

const StepTile: React.FC<StepTileProps> = ({header, paragraph,secondParagraph, step, image, alt, className}) => {
  return (
    <section>
        <WidthWrapper>
            <div className={`${className} flex flex-row justify-evenly items-center`}>
                <div className="w-[300px] h-[300px] rounded-3xl bg-white flex items-center justify-center">
                    {/* <Image src={image} alt={alt}/> */}
                    image
                </div>
                <div className="w-1/2">
                    <span className='text-blue text-3xl font-PoppinsMedium'>{step}</span>
                    <h1 className='text-xl text-white'>{header}</h1>
                    <p className='text-sm text-white'>{paragraph}</p>
                    <p className='text-sm text-white'>{secondParagraph}</p>
                </div>
            </div>
        </WidthWrapper>
    </section>
  )
}

export default StepTile