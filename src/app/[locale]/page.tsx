import FaqSection from "@/components/FaqSection/Faq";
import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import SectionWithImage from "@/components/SectionWithImage";
import PageWrapper from "@/components/PageWrapper";
import AboutSection from "@/components/AboutSection/AboutSection";
import SectionImageBlueBg from "@/components/SectionImageBlueBg";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Header />
        <AboutSection />
        <SectionWithImage />
        <SectionImageBlueBg />
        <WCSSection />
        {/* <FaqSection /> zmienic grida i dodac div wraz z tekstem */}
      </PageWrapper>
    </>
  );
}
