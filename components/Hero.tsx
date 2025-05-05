"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const coolvetica = localFont({
  src: "../fonts/Coolvetica.ttf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Hero() {
  return (
    <section className={`relative w-full min-h-screen flex items-center justify-between px-4 sm:px-10 md:px-24 py-16 bg-white ${inter.className}`}>
      
      {/* Left Text Area */}
      <div className="z-10 max-w-xl space-y-2 md:space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-[80px] font-bold leading-[1.1]">
          <span className="block">The</span>
          <span className={`${coolvetica.className} text-[#11796B] font-normal tracking-[1.25px]`}>Inquisitive</span>
          <span className="block pt-1 sm:pt-2 md:pt-4">Mind</span>
        </h1>

        <p className="italic text-gray-600 text-sm sm:text-base font-normal pt-1 sm:pt-2">
          Your Path to Exam Success
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-normal text-black">
          From learning to mastery<br />We make it happen
        </p>

        <button className="mt-4 sm:mt-6 bg-[#11796B] text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-black transition-all">
          Get Started
        </button>
      </div>

      {/* Right Blob Shape - Adjusted for smaller screens */}
      <div className="hidden md:block absolute right-10 lg:right-24 top-20 lg:top-32 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px]">
        <Image
          src="/images/blob.svg" 
          alt="Blob shape"
          width={500}
          height={500}
          className="rotate-90 scale-120 opacity-[0.25]"
        />
      </div>

      {/* Decorative Swirls - Adjusted for smaller screens */}
      <Image
        src="/images/swirl-top.svg"
        alt="Top swirl"
        width={40}
        height={40}
        className="hidden sm:block absolute top-20 sm:top-32 left-[20rem] sm:left-[40rem] scale-150 sm:scale-200 rotate-180"
      />
      <Image
        src="/images/swirl-bottom.svg"
        alt="Bottom swirl"
        width={40}
        height={40}
        className="hidden sm:block absolute bottom-20 sm:bottom-28 right-10 sm:right-20 scale-200 sm:scale-300 rotate-90"
      />
    </section>
  );
}