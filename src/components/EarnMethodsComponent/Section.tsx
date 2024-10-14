"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

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
            <h2 className="absolute left-1/2 top-[-70px] mb-8 -translate-x-1/2 -translate-y-1/2 text-center text-4xl lg:static lg:top-0 lg:translate-x-0 lg:translate-y-0">
              {t("header")}
            </h2>
          </MotionDiv>
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
            {SectionData.map((data) => (
              <MotionDiv
                key={data.id}
                className="z-[3] rounded-2xl border-2 border-white bg-secondary p-6"
              >
                <div className="flex flex-row items-center gap-4 pb-4">
                  <div className="rounded-full bg-white p-3">
                    <Image src={data.icon} alt="icon" />
                  </div>
                  <h3 className="text-2xl">{t(`${data.header}`)}</h3>
                </div>
                <p>{t(`${data.label}`)}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Section
