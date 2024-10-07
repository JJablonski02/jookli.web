import React from 'react'
import { useTranslations } from 'next-intl'
import WidthWrapper from '../WidthWrapper';
import { SectionData } from './SectionData';
import Image from 'next/image';

const Section = () => {
  const t = useTranslations('EarnMethods.Section');

  return (
    <section>
      <WidthWrapper>
        <div className="mx-20 mt-40 lg:mt-20 md:mt-10 md:mx-0 relative">
        <h2 className='text-4xl text-center mb-8 absolute lg:static top-[-70px] lg:top-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0'>
          {t('header')}
        </h2>
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
            {SectionData.map((data, index) => (
              <div key={index} className='p-6 rounded-2xl border-white border-2 z-[3] bg-secondary'>
                <div className="flex flex-row items-center gap-4 pb-4">
                  <div className='bg-white rounded-full p-3'>
                    <Image src={data.icon} alt='icon' />
                  </div>
                  <h3>{t(`${data.header}`)}</h3>
                </div>
                <p>{t(`${data.label}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Section