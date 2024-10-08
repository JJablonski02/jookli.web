import { useTranslations } from "next-intl"
import React from "react"

import JPDownloadButton from "../buttons/JPDownloadButton"
import { EmblaCarousel } from "../EmblaCarouselComponent/EmblaCarousel"

const AboutUsSection = () => {
  const t = useTranslations("AboutUs.StepTile")
  return (
    <section>
      <div className="mb-12">
        <div className="mx-20 flex flex-col items-center justify-center text-center md:mx-0">
          <div className="mb-8 flex w-full flex-row items-center justify-between md:flex-col md:gap-4">
            <h2 className="font-PoppinsSemiBold text-3xl">
              {t("headerDescription")}
            </h2>
            <JPDownloadButton className="bg-blue p-6 text-primary md:h-14 md:w-4/5" />
          </div>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  )
}

export default AboutUsSection
