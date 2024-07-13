import React from "react";
import WidthWrapper from "../WidthWrapper";
import { InfoData } from "./InfoData";

const InfoSection = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="my-12">
          <div className="text-center flex justify-center items-center flex-col">
            <p className="text-primary font-PoppinsSemiBold">app info</p>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatem architecto omnis. Temporibus itaque quas optio, aut
              deserunt sed distinctio!
            </p>
          </div>
          <div className="grid grid-cols-2 grid-row pt-8 gap-4 place-items-start">
            {InfoData.map((data) => (
              <div className="">
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

export default InfoSection;
