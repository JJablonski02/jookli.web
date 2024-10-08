"use client"

import { Link } from "@nextui-org/link"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar"
import Image from "next/image"
import { useTranslations } from "next-intl"
import React from "react"

import LogoSvg from "../../public/logo.svg"
import JPButton from "./buttons/JPButton"
import {
  toEarnMethods,
  toHome,
  toHowItWorks,
  toRegister,
  toSignIn,
  toSupport,
} from "./routes"

type MenuItem = {
  label: string
  route: string
}

const NavBarUi = () => {
  const t = useTranslations("globals.Captions")
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems: MenuItem[] = [
    { label: "mainPage", route: toHome },
    { label: "howItWorks", route: toHowItWorks },
    { label: "earnMethods", route: toEarnMethods },
    { label: "support", route: toSupport },
    { label: "register", route: toRegister },
    { label: "signIn", route: toSignIn },
  ]

  return (
    <Navbar
      className="header-height mx-auto max-w-[1920px] bg-secondary"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="flex items-center justify-start">
        <NavbarBrand className="min-w-[170px] max-w-[170px]">
          <Link href="/">
            <Image src={LogoSvg} alt="Logo jookli website" />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="ml-auto hidden text-primary lg:block lg:h-[35px]"
        />
      </NavbarContent>

      <NavbarContent className="flex gap-10 lg:hidden">
        <NavbarItem>
          <Link href={toHome}>{t("mainPage")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toHowItWorks}>{t("howItWorks")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toEarnMethods}>{t("earnMethods")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toSupport}>{t("support")}</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-4 lg:hidden" justify="end">
        <NavbarItem>
          <Link href={toRegister}>
            <JPButton className="rounded-full bg-blue" label={t("register")} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toSignIn}>
            <JPButton className="rounded-full bg-blue" label={t("signIn")} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-secondary pt-8 text-center font-PoppinsSemiBold text-3xl">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="p-2" key={`${item.label}-${index}`}>
            <Link href={item.route}>{t(`${item.label}`)}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBarUi
