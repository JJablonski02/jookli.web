import React from "react";
import Image from "next/image";
import logo from "../../public/next.svg";
import WidthWrapper from "./WidthWrapper";
import JPDownloadButton from "./JPDownloadButton";
import { useTranslations } from "next-intl";

const SectionImageBlueBg = () => {
  const t = useTranslations("SectionImageBlueBg");
  return (
    <section className="bg-blue p-6">
      <WidthWrapper>
        <div className="py-10 m-10 flex justify-evenly items-center text-center md:flex md:flex-col gap-4">
          <div>
            <div className="flex justify-start flex-col w-3/4">
              <h2 className="text-xl text-primary text-start">
                {t("headerDescription")}
              </h2>
              <p className="mt-10 text-start font-semibold">
                {t("paragraphDescription")}
              </p>
              <div className="flex justify-start">
                <JPDownloadButton className="text-blue bg-white mt-10" />
              </div>
            </div>
          </div>
          <div className="md:mb-10">
            <Image src={logo} alt="Home Image" width={400} height={500} />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default SectionImageBlueBg;
