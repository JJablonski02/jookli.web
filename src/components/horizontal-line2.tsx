import horizontalLine5 from '../../public/horizontal5.svg'
import horizontalLine6 from '../../public/horizontal6.svg'

import Image from 'next/image'

type HorizontalLineType = "1" | "2";

interface IHorizontalLine{
    variant: HorizontalLineType
}

export const HorizontalLine2 : React.FC<IHorizontalLine> = ({ variant }) => {

    const horizontalLine = {
        "1": horizontalLine5,
        "2": horizontalLine6
      }[variant];

    return(
        <>
            {variant === "1" ? ( /**variant 1 */
                <div className='w-full flex justify-center lg:hidden'>
                    <div className='w-full max-w-[1920px] pl-[168.5px] pr-[270px] mt-[-25px] mb-[-232px]'>
                    <div className='w-full relative'>
                        <Image 
                            className='w-full'
                            src={horizontalLine} 
                            alt='horizontalline-rl' 
                        />
                    </div>
                </div>
            </div>
            ) : ( /**variant 2 */
                <div className='w-full flex justify-center lg:hidden overflow-hidden min-h-[150px]'>
                    <div className='w-full max-w-[1920px] pl-[168.5px] pr-[270px] mt-[-320px] mb-[-120px] relative'>
                        <div className='w-full'>
                            <Image 
                                className='w-full'
                                src={horizontalLine} 
                                alt='horizontalline-rl' 
                            />
                        </div>
                    </div>
                </div>
            )}
         </>
    )
}