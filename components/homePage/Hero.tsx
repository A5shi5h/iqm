"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import SignUpModal from "../SignUpModal";
import { useState } from "react";

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica.ttf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Hero() {
  const [showSignUp, setSignUp] = useState(false);

  return (
    <section
      className={`relative w-full min-h-screen mt-15 px-6 md:px-30 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${inter.className}`}
    >
      {/* Left Side - Text */}
      <div className="z-10 space-y-4">
        <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-tight">
          <span className="block">The</span>
          <span
            className={`${coolvetica.className} text-[#11796B] font-normal tracking-wide`}
          >
            Inquisitive
          </span>
          <span className="block pt-2">Mind</span>
        </h1>

        <p className="italic text-gray-600 text-base sm:text-lg">
          Your Path to Exam Success
        </p>
        <p className="text-lg sm:text-xl text-black font-normal">
          From learning to mastery <br /> We make it happen
        </p>

        <button
          onClick={() => setSignUp(true)}
          className="mt-4 bg-[#11796B] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-black transition-all"
        >
          Get Started
        </button>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        {/* Blob */}
        <Image
          src="/svgs/blob.svg"
          alt="Blob shape"
          height={550}
          width={550}
          className="relative opacity-25 rotate-90 scale-110 left-10 max-[765px]:scale-100 max-[765px]:left-0"
        />

        {/* Hero Image */}
        <Image
          src="/images/heroImage.png"
          alt="Hero"
          width={300}
          height={300}
          className="absolute z-10 scale-170 max-[1000px]:scale-120"
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
        className="absolute bottom-20 right-20 scale-200 rotate-90"
      />

      {/* Modal */}
      {showSignUp && <SignUpModal onClose={() => setSignUp(false)} />}
    </section>
  );
}
