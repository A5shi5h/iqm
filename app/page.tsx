import AboutUs from "@/components/homePage/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/homePage/Hero";
import JoinUs from "@/components/homePage/JoinUs";
import KeyFeatures from "@/components/homePage/KeyFeatures";
import MobileApp from "@/components/MobileApp";
import StartLearning from "@/components/homePage/StartLearning";
import Testimonials from "@/components/homePage/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonials />
      <KeyFeatures />
      <StartLearning />
      <JoinUs />
      <MobileApp />
      <Footer />
    </>
  );
}
