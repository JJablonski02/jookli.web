import React from "react";
import Image from "next/image";
import logo from "../../../public/next.svg";
import WidthWrapper from "../WidthWrapper";
import { dataSection } from "./dataSection";

// rename component

const SectionWithImage = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="py-20 m-10 grid place-items-center grid-cols-2 text-center">
          <Image src={logo} alt="Home Image" width={400} height={500} />
          <div>
            <div className="">
              <h2 className="text-xl text-primary text-start">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="mt-10 text-base font-semibold">
                Lorem ipsum dolor sit, amet consectetur .
              </p>
            </div>
            <div className="grid grid-cols-2 grid-row pt-8 gap-4 place-items-start">
              {dataSection.map((data) => (
                <div className="">
                  <h3>{data.header}</h3>
                  <p>{data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default SectionWithImage;
