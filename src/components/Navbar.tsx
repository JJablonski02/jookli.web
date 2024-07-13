import Link from "next/link";
import WidthWrapper from "./WidthWrapper";
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
import JPButton from "./JPButton";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-[96px] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <WidthWrapper>
        <div className="flex h-[96px] max-w-7xl mx-auto items-center justify-between">
          <div className="w-72 min-w-32">
            <Link className="" href="/">
              <Image className="" src={LogoSvg} alt="Logo jookli website" />
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
              <JPButton label="Zarejestruj" />
            </Link>
            <Link href={toSignIn}>
              <JPButton label="Zaloguj" />
            </Link>
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
