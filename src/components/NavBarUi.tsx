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
  toSignUp,
  toSupport,
} from "./routes";
import LogoSvg from "../../public/logo.svg";
import Image from "next/image";

const NavBarUi = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Strona główna",
    "Na czym to polega",
    "Metody zarabiania",
    "Wsparcie",
    "Zarejestruj",
    "Zaloguj",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="hidden md:block"
        ></NavbarMenuToggle>
        <NavbarBrand className="min-w-[150px] mx-6 md:hidden">
          <Link href="/">
            <Image src={LogoSvg} alt="Logo jookli website" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex gap-4 md:hidden" justify="center">
        <NavbarItem>
          <Link href={toHome}>Strona główna</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toHowItWorks}>Na czym to polega</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toPaymentMethods}>Metody zarabiania</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={toSupport}>Wsparcie</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="text-black  ml-4 md:hidden">
        <NavbarItem>
          <Button as={Link} href={toSignUp} variant="flat">
            Zarejestruj
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href={toSignIn} variant="flat">
            Zaloguj
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link>{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarUi;
