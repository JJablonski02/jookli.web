import React from "react";
import WidthWrapper from "../WidthWrapper";
import { WCSData } from "./WCSData";
import { useTranslations } from "next-intl";
import JPDownloadButton from "../JPDownloadButton";

const WCSSection = () => {
  const t = useTranslations("WCSSection");

  return (
    <section>
      <WidthWrapper>
        <div className="my-36 flex justify-center items-center flex-col text-center">
          <div className=" flex flex-row justify-evenly items-center w-full">
            <h2 className="text-4xl font-PoppinsSemiBold">
              {t("headerDescription")}
            </h2>
            <JPDownloadButton className="text-primary bg-blue" />
          </div>
          <div className="p-8 flex justify-center flex-row gap-8 text-blue md:flex-col md:gap-16">
            {WCSData.map((data, index) => (
              <div key={index} className="w-48 bg-white rounded-xl">
                <h6>{data.name}</h6>
                <div className="">{data.img}</div>
                <p>{data.proffesion}</p>
                <p>{data.content}</p>
              </div>
            ))}
          </div>
          <div className="">paggination wrzuucic z nextui</div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default WCSSection;
