import React from "react";
import WidthWrapper from "../WidthWrapper";
import { WCSData } from "./WCSData";

const WCSSection = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="my-12 flex justify-center items-center flex-col text-center">
          <div className="pb-14">
            <div className="mb-10">svg avatar</div>
            <h2 className="text-4xl font-PoppinsSemiBold pb-4">
              What Client Says
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              sapiente.
            </p>
          </div>
          <div>
            <div className="p-8 flex justify-center flex-row gap-8 md:flex-col md:gap-16">
              {WCSData.map((data) => (
                <div className="w-48">
                  <div className="">{data.img}</div>
                  <h6>{data.name}</h6>
                  <p>{data.proffesion}</p>
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

export default WCSSection;
