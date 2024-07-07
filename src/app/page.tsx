import FaqSection from "@/components/FaqSection/Faq";
import Button from "@/components/button";
import { decodeFormState } from "next/dist/server/app-render/entry-base";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className=" mx-6 mt-14 grid h-full w-full place-items-center grid-cols-2">
        <div>
          <h1 className="text-5xl text-primary">
            Lorem ipsum <br /> dolor sit amet.
          </h1>
          <p className="mt-10 text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, nulla.
          </p>

          <h6 className="text-base mt-6">Get the app</h6>
          <div className="flex gap-4 mt-4">
            <Button label="Get the app" />

            <Button label="Get the app" />
          </div>
        </div>
        <div>
          <Image
            src="next.svg"
            alt="Home Image"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </header>
      <div className=" py-10 px-10 mx-auto max-w-7xl mt-20 border-2 border-black rounded-lg ">
        <div>
          <h3 className="text-3xl">lorem</h3>
          <p className="w-2/3 pt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            eveniet harum magni repellendus totam ipsam quae veniam consequuntur
            magnam molestiae.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto mt-20 border-2 rounded text-center max-w-6xl">
          <img src=""></img>
          <button>x</button>
        </div>
      </div>
      <section>{/* appinfo */}</section>
      <section>{/* mc */}</section>
      <section>{/* wcl */}</section>
      <FaqSection />
    </>
  );
}
