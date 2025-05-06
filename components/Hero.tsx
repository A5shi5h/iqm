"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const coolvetica = localFont({
  src : "../public/fonts/Coolvetica.ttf",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Hero() {
  return (
    <section className={`relative w-full min-h-screen flex items-center justify-between px-10 md:px-24 py-16 bg-white ${inter.className}`}>
      
      {/* Left Text Area */}
      <div className="z-10 max-w-xl space-y-2">
        <h1 className="text-[80px] font-bold leading-[80px]">
          <span className="block">The</span>
          <span className={`${coolvetica.className} text-[#11796B] font-normal tracking-[1.25px]`}>Inquisitive</span>
          <span className="block pt-4">Mind</span>
        </h1>

        <p className="italic text-gray-600 text-[16px] font-normal pt-2">Your Path to Exam Success</p>
        <p className="text-[24px] font-normal text-black">
          From learning to mastery<br />We make it happen
        </p>

        <Link href={"signup"}><button className="mt-6 bg-[#11796B] text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-black transition-all cursor-pointer">
          Get Started
        </button></Link>
      </div>

      {/* Right Blob Shape */}
      <div className="hidden md:block absolute right-24 top-32 w-[500px] h-[500px]">
        <Image
          src="/images/blob.svg" 
          alt="Blob shape"
          width={500}
          height={500}
          className="rotate-90 scale-120 opacity-[0.25]"
        />
      </div>

      {/* Decorative Swirls */}
      <Image
        src="/images/swirl-top.svg"
        alt="Top swirl"
        width={40}
        height={40}
        className="absolute top-32 left-[40rem] scale-200 rotate-180"
      />
      <Image
        src="/images/swirl-bottom.svg"
        alt="Bottom swirl"
        width={40}
        height={40}
        className="absolute bottom-28 right-20 scale-300 rotate-90"
      />
    </section>
  );
}
