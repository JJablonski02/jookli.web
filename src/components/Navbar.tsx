import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
import Button from "./button";
import LogoSvg from "../../public/logo.svg";
import {
  toHowItWorks,
  toPaymentMethods,
  toSignIn,
  toSignUp,
  toSupport,
  toHome,
} from "./routes";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* poprawić link image aby klikalo się tylko na image */}

          <div className="w-48">
            <Link className="" href="/">
              <Image src={LogoSvg} alt="Logo jookli website" />
            </Link>
          </div>
          <ul className="flex gap-4 items-center justify-between px-5">
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
          <div className="h-full flex items-center gap-4">
            <Link href={toSignUp}>
              <Button label="Zarejestruj" />
            </Link>
            <Link href={toSignIn}>
              <Button label="Zaloguj" />
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
