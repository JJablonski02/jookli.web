import React from 'react'
import { FooterMenuData, FooterCompanyData, FooterPlatformData, FooterPolicyData } from './FooterData'

import { useTranslations } from 'next-intl';
import Link from 'next/link';


const FooterLinks = () => {
    const t = useTranslations("globals.Captions");
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-col lg:w-full">
            <div className="">
                <h2 className="text-primary font-PoppinsSemiBold pb-6 border-b-[1px] border-primary w-72 md:w-full">
                    {t("menu")}
                </h2>
                <ul className="text-primary text-xs flex items-start justify-start flex-col gap-4 pt-5 md:items-start md:mb-10 ">
                    {FooterMenuData.map((data, index) => (
                        <li key={index}>
                            <Link href={data.route}>{t(`${data.label}`)}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h2 className="text-primary font-PoppinsSemiBold pb-6 border-b-[1px] border-primary w-72 md:w-full">
                    {t("policy")}
                </h2>
                <ul className="text-primary text-xs flex items-start justify-start flex-col gap-4 pt-5 md:items-start md:mb-10 ">
                    {FooterPolicyData.map((data, index) => (
                        <li key={index}>
                            <Link href={data.route}>{t(`${data.label}`)}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h2 className="text-primary font-PoppinsSemiBold pb-6 border-b-[1px] border-primary w-72 md:w-full">
                    {t("platform")}
                </h2>
                <ul className="text-primary text-xs flex items-start justify-start flex-col gap-4 pt-5 md:items-start md:mb-10 ">
                    {FooterPlatformData.map((data, index) => (
                        <li key={index}>
                            <Link href={data.route}>{t(`${data.label}`)}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h2 className="text-primary font-PoppinsSemiBold pb-6 border-b-[1px] border-primary w-72 md:w-full">
                    {t("company")}
                </h2>
                <ul className="text-primary text-xs flex items-start justify-start flex-col gap-4 pt-5 md:items-start md:mb-10 ">
                    {FooterCompanyData.map((data, index) => (
                        <li key={index}>
                            <Link href={data.route}>{t(`${data.label}`)}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FooterLinks