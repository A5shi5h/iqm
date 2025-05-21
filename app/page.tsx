import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import KeyFeatures from "@/components/KeyFeatures";
import MobileApp from "@/components/MobileApp";
import StartLearning from "@/components/StartLearning";
import Testimonials from "@/components/Testimonials";

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
