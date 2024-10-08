import React from "react"

import WidthWrapper from "../WidthWrapper"
import { FaqData } from "./FaqData"

const FaqSection = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="">
            <h2 className="text-5xl">FAQ</h2>
            <p className="pt-4 text-xl">random paragraph</p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-20 md:flex md:flex-col">
            {FaqData.map((data, index) => (
              <div key={index} className="text-start">
                <h3 className="text-xl">{data.header}</h3>
                <p className="pt-6"> {data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default FaqSection
