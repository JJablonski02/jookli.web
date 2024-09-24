import AboutUsSection from '@/components/AboutUsComponent/AboutUsSection';
import AboutUsHeader from '@/components/AboutUsComponent/Header';
import AboutUsStepTiles from '@/components/AboutUsComponent/StepTiles';
import DownloadSection from '@/components/HomePageComponents/DownloadSection/DownloadSection';
import PageWrapper from '@/components/PageWrapper';
import React from 'react'

const AboutUs = () => {
    return (
        <PageWrapper>
            <AboutUsHeader />
            <AboutUsStepTiles />
            <AboutUsSection />
            <DownloadSection />
        </PageWrapper>
    )
}

export default AboutUs