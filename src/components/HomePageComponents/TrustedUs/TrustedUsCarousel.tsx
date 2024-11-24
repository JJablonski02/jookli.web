"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import { MotionDiv } from "../../motion-components/motion-div"
import { TrustedUsData } from "./TrustedUsData"

export function TrustedUsCarousel() {
  const t = useTranslations("HomePage.TrustedUs")

  const [emblaRef] = useEmblaCarousel(
    { loop: true, slidesToScroll: "auto", dragFree: false },
    [
      AutoScroll({
        playOnInit: true,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        speed: 1,
      }),
    ]
  )

  return (
    <section>
      <MotionDiv className="w-full justify-center pb-2 pt-5 text-center">
        <h4>{t("trustedUs")}</h4>
      </MotionDiv>
      <MotionDiv className="embla">
        <div
          className="embla__viewport pointer-events-none overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container">
            {TrustedUsData.map((data) => (
              <div key={data.id} className="embla__slide mx-8 max-w-[170px]">
                <div className="h-[110px] w-[80px] select-none">
                  <Image
                    src={data.src}
                    alt="user-svg"
                    fill
                    className="max-w-[120px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
