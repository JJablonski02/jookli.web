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
                    <div className='w-full max-w-[1920px] pl-[168.5px] pr-[270px] mt-[-2.3%] mb-[-15%]'>
                    <div className='w-full'>
                        <Image 
                            className='w-full z-[1]'
                            src={horizontalLine} 
                            alt='horizontalline-rl' 
                        />
                    </div>
                </div>
            </div>
            ) : ( /**variant 2 */
                <div className='w-full flex justify-center lg:hidden overflow-hidden min-h-[150px]'>
                    <div className='w-full max-w-[1920px] pl-[168.5px] pr-[270px] mt-[-20%] mb-[-1%] relative'>
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