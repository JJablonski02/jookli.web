import React from 'react'
import WidthWrapper from '../WidthWrapper'
import { useTranslations } from 'next-intl'

const Section = () => {
  const t = useTranslations('HowItWorksPage.Section')


  return (
    <section>
      <WidthWrapper>
        <div className="mx-20 my-12 flex justify-end">
          <div className='w-4/5 h-[467px] bg-white rounded-[162px]'></div>
          <div className='bg-blue p-6 rounded-2xl absolute'>
            <div className="">
              <h2>{t('header')}</h2>
            </div>
            <div className="">
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>

  )
}

export default Section