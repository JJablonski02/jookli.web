import { useTranslations } from "next-intl"
import React from "react"

import { EmblaCarousel } from "@/components/EmblaCarouselComponent/EmblaCarousel"

import JPDownloadButton from "../../buttons/JPDownloadButton"

const WCSSection = () => {
  const t = useTranslations("HomePage.WCSSection")

  return (
    <section>
      <div className="my-12">
        <div className="mx-20 flex flex-col items-center justify-center text-center md:mx-5">
          <div className="mb-8 flex w-full flex-row items-center justify-between md:flex-col md:gap-4">
            <h2 className="font-PoppinsSemiBold text-3xl md:text-2xl">
              {t("headerDescription")}
            </h2>
            <JPDownloadButton className="bg-blue p-6 text-primary md:hidden" />
          </div>
        </div>
        <EmblaCarousel />
      </div>
    </section>
  )
}

export default WCSSection
