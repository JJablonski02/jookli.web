import React from 'react'
import JPDownloadButton from '../buttons/JPDownloadButton'
import { EmblaCarousel } from '../EmblaCarouselComponent/EmblaCarousel'
import { useTranslations } from 'next-intl'

const AboutUsSection = () => {
    const t = useTranslations('AboutUs.StepTile')
    return (
        <section>
            <div className="mb-12">
                <div className="mx-20 md:mx-0 flex justify-center items-center flex-col text-center">
                    <div className=" flex flex-row justify-between items-center w-full md:flex-col md:gap-4 mb-8">
                        <h2 className="text-3xl font-PoppinsSemiBold">
                            {t("headerDescription")}
                        </h2>
                        <JPDownloadButton className="text-primary p-6 bg-blue md:h-14 md:w-4/5" />
                    </div>
                </div>
                <EmblaCarousel />
            </div>
        </section>
    )
}

export default AboutUsSection