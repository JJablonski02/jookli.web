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
            <div className={`${className} flex flex-row justify-between items-center mx-20 my-40`}>
                <div className="lg:hidden w-[381px] h-[381px] rounded-3xl bg-white flex items-center justify-center">
                    {/* <Image src={image} alt={alt}/> */}
                    image
                </div>
                <div className="w-3/5 flex flex-col lg:w-full lg:text-center lg:items-center">
                    <span className='text-blue text-3xl font-PoppinsMedium'>{step}</span>
                    <h1 className='text-xl text-white mt-6'>{header}</h1>
                    <p className='text-sm text-white mt-7'>{paragraph}</p>
                    <p className='text-sm text-white mt-6'>{secondParagraph}</p>
                </div>
            </div>
        </WidthWrapper>
    </section>
  )
}

export default StepTile