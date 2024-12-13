"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import React from "react"

import facebookIcon from "../../../public/facebook.svg"
import instagramIcon from "../../../public/instagram.svg"
import linkedInIcon from "../../../public/linkedIn.svg"
import LogoSvg from "../../../public/logo.svg"
import JPButton from "../buttons/JPButton"
import { JPSelect } from "../JP-select"
import FooterLinks from "./FooterLinks"
import { useFooterData } from "./hooks/use-footer-data"

const Footer = () => {
  const t = useTranslations("globals.Captions")
  const { languages, currentLanguage, handleChangeLanguage } = useFooterData()

  return (
    <footer className="mx-auto mt-12 w-full max-w-[1920px] bg-secondary px-20 md:px-5">
      <div className="w-full">
        <div className="mb-20 mt-4 flex w-full justify-between md:my-8 md:flex-col md:items-center md:gap-4">
          <Link href="/">
            <Image
              className=""
              src={LogoSvg}
              alt="Logo jookli website"
              width={200}
            />
          </Link>
          <div className="flex flex-row items-center justify-center gap-4 text-primary">
            <JPSelect
              data={languages}
              placeholder={currentLanguage}
              onSelectionChange={handleChangeLanguage}
            />
            <Link href="https://www.instagram.com/joyprofits">
              <Image src={instagramIcon} alt="instagram icon" />
            </Link>
            <Link href="https://www.facebook.com/joyprofits">
              <Image src={facebookIcon} alt="facebook icon" />
            </Link>
            <Link href="https://www.linkedin.com/joyprofits">
              <Image src={linkedInIcon} alt="linkedIn icon" />
            </Link>
          </div>
        </div>
        <div className="mb-10 flex flex-row items-center justify-between gap-6 lg:flex-col lg:justify-evenly lg:gap-8">
          <FooterLinks />
          <div className="flex w-2/5 flex-col rounded-3xl bg-gray py-[44px] pl-[34px] pr-[54px] lg:w-full">
            <div>
              <p className="font-PoppinsSemiBold text-lg">{t("downloadApp")}</p>
              <p className="mt-4">{t("appDescription")}</p>
            </div>
            <div className="mt-6 flex flex-row gap-4 md:flex-col">
              <JPButton
                iconType="apple"
                alt="appStore icon"
                className="flex flex-row gap-2 rounded-full bg-blue text-primary md:h-14"
                label="App Store"
              />
              <JPButton
                iconType="googlePlayStore"
                alt="playStore icon"
                className="flex flex-row gap-2 rounded-full bg-blue text-primary md:h-14"
                label="Play Store"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white py-6">
          <p className="text-primary">All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
