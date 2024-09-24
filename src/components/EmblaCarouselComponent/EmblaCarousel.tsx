'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import user from '@/../public/user.svg'
import { WCSData } from '../HomePageComponents/WCSSection/WCSData'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 'auto' }, [Autoplay({ playOnInit: true })])
  const t = useTranslations();

  return (
   <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {WCSData.map((data, index) => (
            <div key={index} className="embla__slide">
              <div className="bg-white shadow-inner rounded-[1.8rem] w-full min-w-0 p-8 h-[var(--slide-height)] select-none">              
                <div className="flex justify-between items-center mb-4">
                <span className="flex flex-row gap-2">
                  <p className="text-xl text-secondary lg:text-md">{data.name}</p>
                  <p className="text-xl text-secondary lg:text-md">{data.country}</p>
                </span>
                <Image src={user} alt={'user-svg'} className="w-14 h-14 lg:hidden" />
              </div>
              <div>
                <p className="overflow-ellipsis text-secondary text-lg lg:text-sm">{`${t(`HomePage.WCSSection.${data.content}`)}`}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
