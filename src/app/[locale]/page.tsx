import Header from "@/components/Header";
import WCSSection from "@/components/WCSSection/WCSSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PageWrapper from "@/components/PageWrapper";
import AboutSection from "@/components/AboutSection/AboutSection";
import SectionImageBlueBg from "@/components/SectionImageBlueBg";
import DownloadSection from "@/components/DownloadSection/DownloadSection";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <AboutSection />
      <HowItWorksSection />
      <SectionImageBlueBg />
      <WCSSection />
      <DownloadSection />
    </PageWrapper>
  );
}
