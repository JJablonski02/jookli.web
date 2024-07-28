import React from "react";
import Image from "next/image";
import WidthWrapper from "./WidthWrapper";
import { useTranslations } from "next-intl";
import analitics from "../../public/analitics.svg";
import lightning from "../../public/lightning.svg";
import shoppingCart from "../../public/shoppingCart.svg";
import logo from "../../public/logo.svg";

const SectionWithImage = () => {
  const t = useTranslations("SectionWithImage");
  return (
    <section>
      <WidthWrapper>
        <div className="py-10 m-10 flex justify-evenly items-center md:flex md:flex-col gap-4 text-start">
          <div className="md:mb-10">
            <Image src={logo} alt="logo svg" width={400} height={500} />
          </div>
          <div>
            <div className="w-3/4">
              <h2 className="text-xl text-primary">{t("headerDescription")}</h2>
              <p className="mt-10 text-base font-semibold">
                {t("paragraphDescription")}
              </p>
            </div>
            <div className="flex flex-col pt-8 gap-4 place-items-start">
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image
                    width={32}
                    height={32}
                    src={analitics}
                    alt="svg icon"
                  />
                </div>
                <p>{t("analitics")}</p>
              </div>
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image
                    width={32}
                    height={32}
                    src={lightning}
                    alt="svg icon"
                  />
                </div>
                <p>{t("transactionsDescription")}</p>
              </div>
              <div className="flex justify-center items-center flex-row">
                <div className="p-2 rounded-xl bg-blue mr-4">
                  <Image
                    width={32}
                    height={32}
                    src={shoppingCart}
                    alt="svg icon"
                  />
                </div>
                <p>{t("cashback")}</p>
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default SectionWithImage;
