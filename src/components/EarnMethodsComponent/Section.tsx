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
        <div className="mx-20 my-40 md:mx-0">
          <h2 className='text-4xl text-center mb-8'>{t('header')}</h2>
          <div className="grid grid-cols-3">
            {SectionData.map((data, index) => (
              <div key={index} className='m-4 p-6 rounded-2xl border-white border-2'>
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