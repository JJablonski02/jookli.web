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
import JPButton from "./JPButton";

type MenuItem = {
  label: string;
  route: string;
};

const NavBarUi = () => {
  const t = useTranslations("Captions");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    { label: "mainPage", route: toHome },
    { label: "howItWorks", route: toHowItWorks },
    { label: "paymentMethods", route: toPaymentMethods },
    { label: "support", route: toSupport },
    { label: "register", route: toRegister },
    { label: "signIn", route: toSignIn },
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
          className="text-primary hidden lg:block lg:h-[35px] ml-auto"
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
          <Link href={toRegister}>
            <JPButton className="bg-blue rounded-full" label={t("register")} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toSignIn}>
            <JPButton className="bg-blue rounded-full" label={t("signIn")} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-secondary text-center text-3xl font-PoppinsSemiBold mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="p-2" key={`${item.label}-${index}`}>
            <Link href={item.route}>{t(`${item.label}`)}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarUi;
