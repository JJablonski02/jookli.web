'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WCSData } from '../HomePageComponents/WCSSection/WCSData'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="" ref={emblaRef}>
      <div className="p-8 flex justify-evenly flex-row gap-8 md:flex-col md:gap-16">
        {WCSData.map((data, index) => (
          <div key={index} className="w-full h-44 bg-white  rounded-xl flex flex-col items-center justify-center">
            <h6 className='text-secondary'>{data.name}</h6>
            <div className='text-secondary'>{data.img}</div>
            <p className='text-secondary'>{data.proffesion}</p>
            <p className='text-secondary'>{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
