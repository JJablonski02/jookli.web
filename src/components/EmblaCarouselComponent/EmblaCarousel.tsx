"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import user from "@/../public/user.svg"

import { WCSData } from "../HomePageComponents/WCSSection/WCSData"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: "auto" }, [
    Autoplay({ playOnInit: true }),
  ])
  const t = useTranslations()

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {WCSData.map((data, index) => (
            <div key={index} className="embla__slide">
              <div className="h-[var(--slide-height)] min-w-0 select-none rounded-[1.8rem] bg-white p-8 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex flex-row gap-2">
                    <p className="lg:text-md text-xl text-secondary">
                      {data.name}
                    </p>
                    <p className="lg:text-md text-xl text-secondary">
                      {data.country}
                    </p>
                  </span>
                  <Image
                    src={user}
                    alt="user-svg"
                    className="size-14 lg:hidden"
                  />
                </div>
                <div className="h-full">
                  <p className="line-clamp-6 text-lg text-secondary lg:text-sm">
                    {t(`HomePage.WCSSection.${data.content}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
