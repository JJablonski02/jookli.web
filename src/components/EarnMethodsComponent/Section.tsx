"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import JPButton from "../buttons/JPButton"
import { MotionDiv } from "../motion-components/motion-div"
import WidthWrapper from "../WidthWrapper"
import { SectionData } from "./SectionData"

const Section = () => {
  const t = useTranslations("EarnMethods.Section")

  return (
    <section>
      <WidthWrapper>
        <div className="relative mx-20 mt-40 lg:mt-20 md:mx-0 md:mt-10">
          <MotionDiv>
            <h3 className="absolute left-1/2 top-[-70px] mb-8 -translate-x-1/2 -translate-y-1/2 text-center lg:static lg:top-0 lg:translate-x-0 lg:translate-y-0">
              {t("header")}
            </h3>
          </MotionDiv>
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
            {SectionData.map((data) => (
              <MotionDiv
                key={data.id}
                className="z-[3] rounded-2xl border-2 border-white bg-background p-6"
              >
                <div className="flex flex-row items-center gap-4 pb-4">
                  <div className="rounded-full bg-white p-3">
                    <Image src={data.icon} alt="icon" />
                  </div>
                  <h4 className="font-PoppinsSemiBold">
                    {t(`${data.header}`)}
                  </h4>
                </div>
                <p>{t(`${data.label}`)}</p>
                <div className="mt-6 flex w-full justify-center">
                  <JPButton label={t("readMore")} className="flex" />
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Section
