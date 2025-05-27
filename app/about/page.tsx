import About from "@/components/aboutUs/About";
import OurTeam from "@/components/aboutUs/OurTeam";
import JoinTeam from "@/components/aboutUs/JoinTeam";
import JoinUs from "@/components/aboutUs/JoinUs";
import React from "react";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <About />
      <OurTeam />
      <JoinTeam />
      <JoinUs />
      <MobileApp />
      <Footer />
    </>
  );
};

export default page;
