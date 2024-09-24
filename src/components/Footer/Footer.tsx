import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSvg from "../../../public/logo.svg";
import JPButton from "../JPButton";
import { useTranslations } from "next-intl";
import instagramIcon from "../../../public/instagram.svg";
import linkedInIcon from "../../../public/linkedIn.svg";
import facebookIcon from "../../../public/facebook.svg";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const t = useTranslations("globals.Captions");

  return (
    <footer className="max-w-[1920px] mx-auto mt-20 px-20 bg-secondary md:px-2.5">
      <div className="w-full">
        <div className="flex justify-between w-full mb-20 mt-4 md:flex-col md:items-center md:gap-4 md:my-8">
          <Link href="/">
            <Image
              className=""
              src={LogoSvg}
              alt="Logo jookli website"
              width={200}
            />
          </Link>
          <div className="text-primary flex flex-row items-center justify-center gap-4">
            <Link href="">
              <Image src={instagramIcon} alt="instagram icon" />
            </Link>
            <Link href="">
              <Image src={facebookIcon} alt="facebook icon" />
            </Link>
            <Link href="">
              <Image src={linkedInIcon} alt="linkedIn icon" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mb-10 lg:flex-col lg:gap-8 lg:justify-evenly ">
          <FooterLinks />
          <div className="flex flex-col bg-gray rounded-3xl py-[44px] pl-[34px] pr-[54px] w-2/5 lg:w-full">
            <div>
              <p className="font-PoppinsSemiBold text-lg">{t("downloadApp")}</p>
              <p className="mt-4">{t("appDescription")}</p>
            </div>
            <div className="flex flex-row gap-4 mt-6 md:flex-col">
              <JPButton
                imageType="appStore"
                alt="appStore icon"
                className="text-primary bg-blue rounded-full flex flex-row gap-2 md:h-14"
                label="App Store"
              />
              <JPButton
                imageType="playStore"
                alt="playStore icon"
                className="text-primary bg-blue rounded-full flex flex-row gap-2 md:h-14"
                label="Play Store"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 py-6 border-t border-gray-500">
          <p className="text-primary">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
