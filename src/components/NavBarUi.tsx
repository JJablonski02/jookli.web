"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  toHome,
  toHowItWorks,
  toPaymentMethods,
  toSignIn,
  toRegister,
  toSupport,
} from "./routes";
import LogoSvg from "../../public/logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const NavBarUi = () => {
  const t = useTranslations("Captions");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "mainPage",
    "howItWorks",
    "paymentMethods",
    "support",
    "register",
    "signIn",
  ];

  return (
    <Navbar
      className="bg-secondary h-[100px] lg:h-[70px] max-w-[1920px] mx-auto"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="flex justify-start items-center">
        <NavbarBrand className="max-w-[170px] min-w-[170px]">
          <Link href="/">
            <Image src={LogoSvg} alt="Logo jookli website" />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="hidden lg:block ml-auto"
        ></NavbarMenuToggle>
      </NavbarContent>

      <NavbarContent className="flex lg:hidden gap-10">
        <NavbarItem>
          <Link href={toHome}>{t("mainPage")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toHowItWorks}>{t("howItWorks")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toPaymentMethods}>{t("paymentMethods")}</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toSupport}>{t("support")}</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="ml-4 lg:hidden" justify="end">
        <NavbarItem>
          <Button
            className="text-primary bg-blue"
            radius="full"
            as={Link}
            href={toRegister}
          >
            {t("register")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-primary bg-blue"
            radius="full"
            as={Link}
            href={toSignIn}
          >
            {t("signIn")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link>{t(`${item}`)}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarUi;
