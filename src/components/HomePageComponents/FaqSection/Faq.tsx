import React from "react";
import { FaqData } from "./FaqData";
import WidthWrapper from "../../WidthWrapper";

const FaqSection = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="flex justify-center flex-col items-center text-center py-10 ">
          <div className="">
            <h2 className="text-5xl">FAQ</h2>
            <p className="text-xl pt-4">random paragraph</p>
          </div>
          <div className="grid grid-cols-3 gap-20 mt-10 md:flex md:flex-col ">
            {FaqData.map((data, index) => (
              <div key={index} className="text-start">
                <h3 className="text-xl">{data.header}</h3>
                <p className="pt-6 "> {data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default FaqSection;
