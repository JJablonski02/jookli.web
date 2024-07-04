import React from "react";
import Link from "next/link";
import { toHowItWorks, toPaymentMethods, toSupport, toHome } from "./routes";

const Footer = () => {
  return (
    <footer className="mt-20 ">
      <div className="px-20 py-10 bg-green-500">
        <Link href="/" className="flex z-40 font-semibold">
          JOY<span className="text-green-600">PROFITS</span>
        </Link>
        <p className="text-secondary">halo</p>
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
    </footer>
  );
};

export default Footer;
