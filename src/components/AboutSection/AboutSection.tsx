import React from "react";
import WidthWrapper from "../WidthWrapper";
import { AboutData } from "./AboutData";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("AboutSection");

  return (
    <section>
      <WidthWrapper>
        <div className="my-12">
          <div className="text-center flex justify-center items-center flex-col">
            <p className="text-primary font-PoppinsSemiBold"></p>
            <h2 className="text-3xl">{t("headerDescription")}</h2>
            <p className="w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatem architecto omnis.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-row pt-8 gap-4 place-items-start md:flex lg:flex-col md:items-start">
            {AboutData.map((data, index) => (
              <div key={index} className="">
                {/* svg */}
                <h3>{data.header}</h3>
                <p>{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default AboutSection;
