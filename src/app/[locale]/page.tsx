import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import SectionWithImage from "@/components/SectionWithImage";
import PageWrapper from "@/components/PageWrapper";
import AboutSection from "@/components/AboutSection/AboutSection";
import SectionImageBlueBg from "@/components/SectionImageBlueBg";
import DownloadSection from "@/components/DownloadSection/DownloadSection";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <AboutSection />
      <SectionWithImage />
      <SectionImageBlueBg />
      <WCSSection />
      <DownloadSection />
    </PageWrapper>
  );
}
