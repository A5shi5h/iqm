import ContentContainer from '@/components/ContentContainer';
import Footer from '@/components/Footer';
import MobileApp from '@/components/MobileApp';
import ParallaxWrapper from '@/components/ParallaxWrapper';
import Hero from '@/components/testimonials/Hero';
import JoinUs from '@/components/testimonials/JoinUs';
import OurStudents from '@/components/testimonials/OurStudents';
import StartLearning from '@/components/testimonials/StartLearning';
import React from 'react'

const page = () => {
  return (
    <>
      <ParallaxWrapper>
        <Hero />
      </ParallaxWrapper>
      <ContentContainer>
        <OurStudents />
        <StartLearning />
        <JoinUs />
        <MobileApp />
        <Footer />
      </ContentContainer>
    </>
  )
}

export default page
