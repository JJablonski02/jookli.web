import React from "react";
import Link from "next/link";
import { toHowItWorks, toPaymentMethods, toSupport, toHome } from "./routes";
import Image from "next/image";
import LogoSvg from "../../public/logo.svg";
import JPButton from "./JPButton";

const Footer = () => {
  return (
    <footer className="mt-20 px-20  bg-secondary ">
      <div className="flex justify-between items-center pt-4">
        <div className="">
          <div className="w-fit">
            <Link href="/">
              <Image
                className="my-4"
                src={LogoSvg}
                alt="Logo jookli website"
                width={100}
              />
            </Link>
          </div>
          <p className="text-black mb-8">Test</p>
          <ul className="flex items-center justify-start gap-4 pt-5 ">
            <li>
              <Link href={toHome}>Strona główna</Link>
            </li>
            <li>
              <Link href={toHowItWorks}>Na czym to polega</Link>
            </li>
            <li>
              <Link href={toPaymentMethods}>Metody zarabiania</Link>
            </li>
            <li>
              <Link href={toSupport}>Wsparcie</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="">Get the app</h6>
          <JPButton label="get the app app" />
          <JPButton label="get the app app" />
        </div>
      </div>
      <div className="mt-12 py-6 border-t border-gray-500">
        <p className="text-black">© 2024 by ...</p>
      </div>
    </footer>
  );
};

export default Footer;
