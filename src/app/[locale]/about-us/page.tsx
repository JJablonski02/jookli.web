import AboutUsHeader from '@/components/AboutUsComponent/Header';
import AboutUsStepTiles from '@/components/AboutUsComponent/StepTiles';
import { EmblaCarousel } from '@/components/EmblaCarouselComponent/EmblaCarousel';
import DownloadSection from '@/components/HomePageComponents/DownloadSection/DownloadSection';
import PageWrapper from '@/components/PageWrapper';
import React from 'react'

const AboutUs = () => {
    return (
        <PageWrapper>
            <AboutUsHeader />
            <AboutUsStepTiles />
            <EmblaCarousel />
            <DownloadSection />
        </PageWrapper>
    )
}

export default AboutUs