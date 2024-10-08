import AboutSection from "@/components/HomePageComponents/AboutSection/AboutSection"
import DownloadSection from "@/components/HomePageComponents/DownloadSection/DownloadSection"
import HomePageHeader from "@/components/HomePageComponents/Header"
import HowItWorksSection from "@/components/HomePageComponents/HowItWorksSection"
import SectionImageBlueBg from "@/components/HomePageComponents/SectionImageBlueBg"
import WCSSection from "@/components/HomePageComponents/WCSSection/WCSSection"
import PageWrapper from "@/components/PageWrapper"

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
  )
}
