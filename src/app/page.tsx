import FaqSection from "@/components/FaqSection/Faq";
import JPButton from "@/components/JPButton";
import Image from "next/image";
import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import SectionWithImage from "@/components/SectionWithImage/SectionWithImage";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" py-10 px-10 mx-8 mt-20 border-2 border-black rounded-lg shadow-md ">
        <h3 className="text-3xl">lorem</h3>
        <p className="w-2/3 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          eveniet harum magni repellendus totam ipsam quae veniam consequuntur
          magnam molestiae.
        </p>
      </div>
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
      <section>{/* appinfo */}</section>
      <SectionWithImage />
      <WCSSection />
      <FaqSection />
    </>
  );
}
