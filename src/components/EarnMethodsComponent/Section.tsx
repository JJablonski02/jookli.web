import React from 'react'
import { useTranslations } from 'next-intl'
import WidthWrapper from '../WidthWrapper';

const Section = () => {
  const t = useTranslations('EarnMethods.Header');

  return (
    <section>
      <WidthWrapper>
        <div className="mx-20 md:mx-0">x</div>
      </WidthWrapper>
    </section>
  )
}

export default Section