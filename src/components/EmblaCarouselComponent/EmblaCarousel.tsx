"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import user from "@/../public/user.svg"

import { WCSData } from "../HomePageComponents/WCSSection/WCSData"
import { MotionDiv } from "../motion-components/motion-div"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: "auto" }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]) /** 5 sekund */
  const t = useTranslations()

  return (
    <MotionDiv className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {WCSData.map((data) => (
            <div key={data.id} className="embla__slide">
              <div className="h-[var(--slide-height)] min-w-0 select-none rounded-[1.8rem] bg-white p-8 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex flex-row gap-2">
                    <p className="lg:text-md text-inverted">{data.name}</p>
                    <span className={`fi fi-${data.country}`} />
                  </span>
                  <Image
                    src={user}
                    alt="user-svg"
                    className="size-14 lg:hidden"
                  />
                </div>
                <div className="h-full">
                  <p className="text-inverted line-clamp-6 text-lg lg:text-sm">
                    {t(`HomePage.WCSSection.${data.content}`)}
                  </p>
                  <p className="text-inverted text-sm">(translated)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionDiv>
  )
}
