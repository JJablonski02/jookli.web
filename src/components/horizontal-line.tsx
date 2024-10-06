import horizontalLine1 from '../../public/horizontal1.svg'
import horizontalLine2 from '../../public/horizontal2.svg'
import horizontalLine3 from '../../public/horizontal3.svg'
import horizontalLine4 from '../../public/horizontal4.svg'

import Image from 'next/image'

type HorizontalLineType = "1" | "2" | "3" | "4";

interface IHorizontalLine{
    variant: HorizontalLineType
}

export const HorizontalLine : React.FC<IHorizontalLine> = ({ variant }) => {

    const horizontalLine = {
        "1": horizontalLine1,
        "2": horizontalLine2,
        "3": horizontalLine3,
        "4": horizontalLine4
      }[variant];

    return(
        <div className='w-full flex justify-center lg:hidden'>
            <div className='w-full max-w-[1920px] pl-[308.5px] pr-[270px] my-[-25px]'>
                <div className='w-full relative'>
                    <Image 
                        className='w-full'
                        src={horizontalLine} 
                        alt='horizontalline-rl' 
                    />
                </div>
            </div>
        </div>
    )
}