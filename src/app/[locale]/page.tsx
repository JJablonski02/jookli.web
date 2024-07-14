import FaqSection from "@/components/FaqSection/Faq";
import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import SectionWithImage from "@/components/SectionWithImage/SectionWithImage";
import InfoSection from "@/components/InfoSection/InfoSection";
import BannerVideo from "@/components/BannerVideo";
import TextContainer from "@/components/TextContainer";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Header />
        <TextContainer
          header="header"
          content="content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, maiores."
        />
        <BannerVideo />
        <InfoSection />
        <SectionWithImage />
        <WCSSection />
        <FaqSection />
      </PageWrapper>
    </>
  );
}
