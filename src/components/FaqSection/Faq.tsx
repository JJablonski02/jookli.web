import React from "react";
import { FaqData } from "./FaqData";

const FaqSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex justify-center flex-col items-center text-center py-10 ">
        <div className="">
          <h2 className="text-5xl">FAQ</h2>
          <p className="text-xl pt-4">random paragraph</p>
        </div>
        <div className="grid grid-cols-3 gap-20 mt-10 ">
          {FaqData.map((data) => (
            <div className="text-start">
              <h3 className="text-xl">{data.header}</h3>
              <p className="pt-6 "> {data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
