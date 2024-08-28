import React from "react";
import Link from "next/link";
import { toHowItWorks, toPaymentMethods, toSupport, toHome } from "./routes";
import Image from "next/image";
import LogoSvg from "../../public/logo.svg";
import JPButton from "./JPButton";
import { useTranslations } from "next-intl";
import instagramIcon from "../../public/instagram.svg";
import linkedInIcon from "../../public/linkedIn.svg";
import facebookIcon from "../../public/facebook.svg";

const Footer = () => {
  const t = useTranslations("Captions");

  return (
    <footer className="mt-20 px-20 bg-secondary md:px-2.5">
      <div className="max-w-7xl mx-auto ">
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
        <div className="flex justify-between md:flex-col lg:justify-around ">
          <div className="">
            <p className="text-primary font-PoppinsSemiBold pb-6 border-b-[1px] border-primary w-72 md:w-full">
              MENU
            </p>
            <ul className="text-primary text-sm flex items-start justify-start flex-col gap-4 pt-5 md:items-start md:mb-10 ">
              <li>
                <Link href={toHome}>{t("mainPage")}</Link>
              </li>
              <li>
                <Link href={toHowItWorks}>{t("howItWorks")}</Link>
              </li>
              <li>
                <Link href={toPaymentMethods}>{t("paymentMethods")}</Link>
              </li>
              <li>
                <Link href={toSupport}>{t("support")}</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-gray rounded-3xl py-[44px] pl-[34px] pr-[54px] w-2/5 md:w-full">
            <div className="">
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
