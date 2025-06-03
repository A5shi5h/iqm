import About from "@/components/aboutUs/About";
import OurTeam from "@/components/aboutUs/OurTeam";
import JoinTeam from "@/components/aboutUs/JoinTeam";
import JoinUs from "@/components/aboutUs/JoinUs";
import React from "react";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import ContentContainer from "@/components/ContentContainer";

const page = () => {
  return (
    <>
      <ParallaxWrapper>
        <About />
      </ParallaxWrapper>
      <ContentContainer>
        <OurTeam />
        <JoinTeam />
        <JoinUs />
        <MobileApp />
        <Footer />
      </ContentContainer>
    </>
  );
};

export default page;
