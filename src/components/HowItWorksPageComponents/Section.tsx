import React from 'react'
import WidthWrapper from '../WidthWrapper'
import { useTranslations } from 'next-intl'
import { StepOverview } from './StepOverview'
import { StepArrow } from './StepArrow'

const Section = () => {
  const t = useTranslations('HowItWorksPage.Section')


  return (
    <section>
      <WidthWrapper>
        <div className="mx-20 my-12 flex justify-end relative md:mx-0">
          <div className='min-h-[467px] lg:min-h-[1100px] w-4/5 pb-[25px] flex'>
            <div className='bg-white rounded-[162px] lg:rounded-[100px] flex-grow'></div>
            <div className='bg-blue p-6 rounded-2xl absolute left-0 bottom-0 w-11/12 min-h-[66%] flex flex-col'>
              <div className="text-center lg:mb-8 mt-4">
                <h2 className='text-5xl md:text-3xl'>{t('header')}</h2>
              </div>
              <div className="flex flex-grow items-center justify-between lg:flex-col lg:gap-8">
                <StepOverview variant='1'/>
                <StepArrow/>
                <StepOverview variant='2'/>
                <StepArrow/>
                <StepOverview variant='3'/>
                <StepArrow/>
                <StepOverview variant='4'/>
                <StepArrow/>
                <StepOverview variant='5'/>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>

  )
}
{/*  */}
export default Section