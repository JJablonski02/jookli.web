import React from "react";
import Image from "next/image";
import JPButton from "@/components/JPButton";
import WidthWrapper from "./WidthWrapper";

const BannerVideo = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="p-8">
          <div className="mx-auto mt-20 border-2 rounded-xl text-center max-w-6xl relative flex justify-center items-center">
            <Image
              className="w-full h-full"
              src="next.svg"
              alt="Home Image"
              width={200}
              height={200}
            />
            <div className="absolute flex justify-center items-center h-full w-full">
              <JPButton className="rounded-full" label="x" />
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
};

export default BannerVideo;
