import Footer from '@/components/Footer';
import MobileApp from '@/components/MobileApp';
import Hero from '@/components/testimonials/Hero';
import JoinUs from '@/components/testimonials/JoinUs';
import OurStudents from '@/components/testimonials/OurStudents';
import StartLearning from '@/components/testimonials/StartLearning';
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <OurStudents />
      <StartLearning />
      <JoinUs />
      <MobileApp />
      <Footer />
    </>
  )
}

export default page
