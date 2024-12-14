import { useTranslations } from "next-intl"
import React from "react"

import { EmblaCarousel } from "@/components/EmblaCarouselComponent/EmblaCarousel"
import { MotionDiv } from "@/components/motion-components/motion-div"

import JPDownloadButton from "../../buttons/JPDownloadButton"

const WCSSection = () => {
  const t = useTranslations("HomePage.WCSSection")

  return (
    <section>
      <div className="my-12">
        <div className="mx-20 flex flex-col items-center justify-center text-center md:mx-5">
          <MotionDiv className="mb-8 flex w-full flex-row items-center justify-between md:flex-col md:gap-4">
            <h3>{t("headerDescription")}</h3>
            <JPDownloadButton className="bg-blue p-6 md:hidden" />
          </MotionDiv>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  )
}

export default WCSSection
