import { useTranslations } from "next-intl"
import React from "react"

import { MotionDiv } from "../motion-components/motion-div"
import WidthWrapper from "../WidthWrapper"

const SectionImageBlueBg = () => {
  const t = useTranslations("HomePage.SectionImageBlueBg")
  return (
    <section>
      <WidthWrapper className="px-0">
        <MotionDiv className="rounded-3xl bg-blue px-5">
          <div className="my-12 flex gap-4 px-20 py-10 text-center md:flex md:flex-col md:px-0">
            <div className="flex flex-col justify-start md:w-full md:items-center">
              <h3 className="text-start md:text-center">
                {t("headerDescription")}
              </h3>
              <p className="mt-10 w-1/2 text-start lg:w-full md:text-center">
                {t("paragraphDescription")}
              </p>
            </div>
          </div>
        </MotionDiv>
      </WidthWrapper>
    </section>
  )
}

export default SectionImageBlueBg
