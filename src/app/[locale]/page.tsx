import HomePageHeader from "@/components/HomePageComponents/Header";
import WCSSection from "@/components/HomePageComponents/WCSSection/WCSSection";
import HowItWorksSection from "@/components/HomePageComponents/HowItWorksSection";
import PageWrapper from "@/components/PageWrapper";
import AboutSection from "@/components/HomePageComponents/AboutSection/AboutSection";
import SectionImageBlueBg from "@/components/HomePageComponents/SectionImageBlueBg";
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection";

export default function Home() {
  return (
    <PageWrapper>
      <HomePageHeader />
      <AboutSection />
      <HowItWorksSection />
      <WCSSection />
      <SectionImageBlueBg />
      <DownloadSection />
    </PageWrapper>
  );
}
