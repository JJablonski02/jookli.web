import FaqSection from "@/components/FaqSection/Faq";
import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import SectionWithImage from "@/components/SectionWithImage/SectionWithImage";
import InfoSection from "@/components/InfoSection/InfoSection";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Header />
        <InfoSection />
        <SectionWithImage />
        {/* <SectionWithImage /> musi zostac w  komponencie zmieniony tekst z obrazkiem  */}
        <WCSSection />
        <FaqSection /> {/* zmienic grida i dodac div wraz z tekstem*/}
      </PageWrapper>
    </>
  );
}
