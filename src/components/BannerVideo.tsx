import Image from "next/image"
import React from "react"

import JPButton from "@/components/buttons/JPButton"

import WidthWrapper from "./WidthWrapper"

const BannerVideo = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="p-8">
          <div className="relative mx-auto mt-20 flex max-w-6xl items-center justify-center rounded-xl border-2 text-center">
            <Image
              className="size-full"
              src="next.svg"
              alt="Home Image"
              width={200}
              height={200}
            />
            <div className="absolute flex size-full items-center justify-center">
              <JPButton className="rounded-full" label="x" />
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default BannerVideo
