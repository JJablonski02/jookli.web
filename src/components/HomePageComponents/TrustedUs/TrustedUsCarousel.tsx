"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import { MotionDiv } from "../../motion-components/motion-div"
import { TrustedUsData } from "./TrustedUsData"

export function TrustedUsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: "auto" }, [
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      speed: 1,
    }),
  ])
  const t = useTranslations("HomePage.TrustedUs")

  return (
    <div>
      <MotionDiv className="w-full justify-center pb-2 pt-5 text-center">
        <h3 className="text-2xl">{t("trustedUs")}</h3>
      </MotionDiv>
      <MotionDiv className="embla h-[110px]">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {TrustedUsData.map((data) => (
              <div
                key={data.id}
                className="embla__slide mx-4 flex max-h-[110px] max-w-[80px]"
              >
                <div className="self-center">
                  <Image
                    src={data.src}
                    alt="user-svg"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
