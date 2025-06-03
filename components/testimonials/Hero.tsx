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
      className={`relative w-full pt-56 items-center ${inter.className}`}
    >

      {/* Decorative Swirls */}
      <Image
        src="/svgs/swirl-top.svg"
        alt="Top swirl"
        width={40}
        height={40}
        className="absolute top-40 right-0 md:right-90 scale-180 rotate-180"
      />

      <Image
        src="/svgs/swirl-bottom.svg"
        alt="Bottom swirl"
        width={40}
        height={40}
        className="absolute bottom-0 left-90 scale-190 rotate-180"
      />
     

      {/* Right Side - Text */}
      <div className=" max-w-[38rem] mx-auto z-10 space-y-4">
        <h1 className={`${coolvetica.className} text-[48px] sm:text-[64px] font-normal leading-tight text-center pb-4 mb-12 border-b`}>
          Testimonials
        </h1>
        <p className={`${sansation.className} font-normal text-2xl text-center px-14`}>
        Students at IQM have successfully qualified and excelled in board exams and top competitive exams across India, proving the strength of our teaching and guidance
        </p>
      </div>

      {/* Modal */}
      {showSignUp && <SignUpModal onClose={() => setSignUp(false)} />}
    </section>
  );
}
