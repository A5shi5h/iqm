"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import SignUpModal from "../SignUpModal";
import { useState } from "react";

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
});

const sansation = localFont({
    src: "../../public/fonts/Sansation-Regular.ttf",
    variable: "--font-sansation",
  });

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Hero() {
  const [showSignUp, setSignUp] = useState(false);

  return (
    <section
      className={`relative w-full min-h-screen mt-15 px-6 md:px-30 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${inter.className}`}
    >
     
     {/* Left Side - Images */}
     <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        {/* Blob */}
        <Image
          src="/svgs/blob.svg"
          alt="Blob shape"
          height={550}
          width={550}
          className="relative opacity-25 rotate-90 scale-100 left-1 max-[765px]:scale-100 max-[765px]:left-0"
        />

        {/* Hero Image */}
        <Image
          src="/images/aboutImage.png"
          alt="Hero"
          width={300}
          height={300}
          className="absolute z-10 scale-150 max-[1000px]:scale-120"
        />
      </div>

      {/* Decorative Swirls */}
      <Image
        src="/svgs/swirl-top.svg"
        alt="Top swirl"
        width={40}
        height={40}
        className="absolute top-20 left-[40%] md:left-[45%] scale-180 rotate-180"
      />

      <Image
        src="/svgs/swirl-bottom.svg"
        alt="Bottom swirl"
        width={40}
        height={40}
        className="absolute bottom-20 left-20 scale-200 rotate-90"
      />
     

      {/* Right Side - Text */}
      <div className="z-10 space-y-4">
        <h1 className={`${coolvetica.className} text-[48px] sm:text-[64px] font-normal leading-tight text-center pb-4 mb-10 border-b`}>
          About Us
        </h1>
        <p className={`${sansation.className} font-normal text-2xl text-center px-14`}>
        IQM began in Sikkim to meet the rising demand for competitive exam and board exam coaching. Starting with offline classes, it has grown into one of the top education institutes in the region.
        </p>
      </div>

      {/* Modal */}
      {showSignUp && <SignUpModal onClose={() => setSignUp(false)} />}
    </section>
  );
}
