import React from "react";
import Link from "next/link";
import { toHowItWorks, toPaymentMethods, toSupport, toHome } from "./routes";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="mt-20 px-20 pt-10 bg-secondary ">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/" className="flex z-40 font-semibold text-xl mb-4">
            JOY<span className="text-green-600">PROFITS</span>
          </Link>
          <p className="mb-8">Test</p>
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
          <Button label="get the app app" />
          <Button label="get the app app" />
        </div>
      </div>
      <div className="mt-12 py-6 border-t border-gray-500">
        <p>© 2024 by ...</p>
      </div>
    </footer>
  );
};

export default Footer;
