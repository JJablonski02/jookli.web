import { useTranslations } from "next-intl"
import React from "react"

import WidthWrapper from "../WidthWrapper"

const SectionImageBlueBg = () => {
  const t = useTranslations("HomePage.SectionImageBlueBg")
  return (
    <section className="rounded-3xl bg-blue md:rounded-none">
      <WidthWrapper>
        <div className="mb-32 mt-12 flex gap-4 px-20 py-10 text-center md:flex md:flex-col md:px-0">
          <div className="flex flex-col justify-start md:w-full md:items-center">
            <h2 className="text-start text-3xl text-primary md:text-center">
              {t("headerDescription")}
            </h2>
            <p className="mt-10 w-1/2 text-start md:w-full md:text-center">
              {t("paragraphDescription")}
            </p>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default SectionImageBlueBg
