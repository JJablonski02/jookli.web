import Link from "next/link"
import { useTranslations } from "next-intl"
import React from "react"

import {
  FooterCompanyData,
  FooterMenuData,
  FooterPlatformData,
  FooterPolicyData,
} from "./FooterData"

const FooterLinks = () => {
  const t = useTranslations("globals.Captions")
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:w-full md:flex md:flex-col">
      <div className="">
        <h2 className="w-72 border-b-1 border-primary pb-6 font-PoppinsSemiBold text-primary md:w-full">
          {t("menu")}
        </h2>
        <ul className="flex flex-col items-start justify-start gap-4 pt-5 text-xs text-primary md:mb-10 md:items-start">
          {FooterMenuData.map((data) => (
            <Link key={data.route} href={data.route}>
              {t(`${data.label}`)}
            </Link>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="w-72 border-b-1 border-primary pb-6 font-PoppinsSemiBold text-primary md:w-full">
          {t("policy")}
        </h2>
        <ul className="flex flex-col items-start justify-start gap-4 pt-5 text-xs text-primary md:mb-10 md:items-start">
          {FooterPolicyData.map((data) => (
            <Link key={data.route} href={data.route}>
              {t(`${data.label}`)}
            </Link>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="w-72 border-b-1 border-primary pb-6 font-PoppinsSemiBold text-primary md:w-full">
          {t("platform")}
        </h2>
        <ul className="flex flex-col items-start justify-start gap-4 pt-5 text-xs text-primary md:mb-10 md:items-start">
          {FooterPlatformData.map((data) => (
            <Link key={data.route} href={data.route}>
              {t(`${data.label}`)}
            </Link>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="w-72 border-b-1 border-primary pb-6 font-PoppinsSemiBold text-primary md:w-full">
          {t("company")}
        </h2>
        <ul className="flex flex-col items-start justify-start gap-4 pt-5 text-xs text-primary md:mb-10 md:items-start">
          {FooterCompanyData.map((data) => (
            <Link key={data.route} href={data.route}>
              {t(`${data.label}`)}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks
