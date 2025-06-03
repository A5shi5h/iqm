import AboutUs from "@/components/homePage/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/homePage/Hero";
import JoinUs from "@/components/homePage/JoinUs";
import KeyFeatures from "@/components/homePage/KeyFeatures";
import MobileApp from "@/components/MobileApp";
import StartLearning from "@/components/homePage/StartLearning";
import Testimonials from "@/components/homePage/Testimonials";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import ContentContainer from "@/components/ContentContainer";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <ParallaxWrapper>
        <Hero />
      </ParallaxWrapper>
      <ContentContainer>
        <AboutUs />
        <Testimonials />
        <KeyFeatures />
        <StartLearning />
        <JoinUs />
        <MobileApp />
        <Footer />
      </ContentContainer>
    </div>
  );
}
